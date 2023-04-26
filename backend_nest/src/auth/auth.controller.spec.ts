import { Test } from '@nestjs/testing'
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'
import { PrismaService } from './../prisma/prisma.service'
import { ConfigModule } from '@nestjs/config'
import { Image } from '@prisma/client'

describe('AuthController integration tests', () => {
    let controller: AuthController
    let service: AuthService

    beforeEach(async () => {
        const moduleRef = await Test.createTestingModule({
            imports: [ConfigModule],
            controllers: [AuthController],
            providers: [
                AuthService,
                PrismaService,
            ],
        }).compile()

        controller = moduleRef.get<AuthController>(AuthController)
        service = moduleRef.get<AuthService>(AuthService)
    })

    it('controller should be defined', () => {
        expect(controller).toBeDefined()
    })

    it('service should be defined', () => {
        expect(service).toBeDefined()
    })

    describe('should sign up and sign in', () => {
        let email: string
        let password: string

        beforeAll(() => {
            const times = new Date().getTime()
            email = `${times}@gmail.com`
            password = `${times}`
        })

        it('should sign up', async () => {
            jest.spyOn(service, 'signUp')

            expect(await controller.signUp({ email, password }))
                .not.toEqual({
                    status: 201,
                    created_at: expect.any(Date),
                    updated_at: expect.any(Date),
                    email: email,
                })

            expect(service.signUp).toHaveBeenCalledWith({ email, password })
        })

        it('sign in after sign up should success', async () => {
            jest.spyOn(service, 'signIn')

            expect(await controller.signIn({ email, password }))
                .not.toEqual({
                    status: 201,
                    created_at: expect.any(Date),
                    updated_at: expect.any(Date),
                    email: email,
                })

            expect(service.signIn).toHaveBeenCalledWith({ email, password })
        })
    })

})