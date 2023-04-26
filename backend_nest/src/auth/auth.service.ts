import { ForbiddenException, Injectable } from '@nestjs/common'
import { PrismaService } from './../prisma/prisma.service'
import { AuthDto } from './dto'
import * as argon from 'argon2'
import { PrismaClientKnownRequestError } from '@prisma/client/runtime'

@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService) {}

    async signUp(dto: AuthDto) {

        try {

            const hash = await argon.hash(dto.password)

            const user = await this.prisma.user.create({
                data: {
                    email: dto.email,
                    hash
                }
            })

            delete user.hash

            return user
        } catch (error) {
            if (error instanceof PrismaClientKnownRequestError) {
                const isDuplacatedUniqueFieldErr = error.code === 'P2002'
                if (isDuplacatedUniqueFieldErr)
                    throw new ForbiddenException('Credentials taken')
            }

            throw error
        }

    }

    async signIn(dto: AuthDto) {
        const user = await this.prisma.user.findUnique({
            where: {
                email: dto.email
            }
        })

        if (!user)
            throw new ForbiddenException('Non-existing e-mail')

        const doesPswdMatches = await argon.verify(user.hash, dto.password)

        if (!doesPswdMatches)
            throw new ForbiddenException('Credentials incorrect')

        delete user.hash

        return user
    }
}
