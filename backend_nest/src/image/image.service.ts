import { Injectable } from '@nestjs/common';
import { ImageDto } from './dto/image.dto';
import { PrismaService } from './../prisma/prisma.service';
const fs = require('fs')
const path = require('path')

@Injectable()
export class ImageService {

  constructor(private prisma: PrismaService) { }

  async create(dto: ImageDto) {
    const image = await this.prisma.image.create({
      data: {
        is_it_carbs: dto.is_it_carbs === 'true',
        is_it_prots: dto.is_it_prots === 'true',
        is_it_fats: dto.is_it_fats === 'true',
        filename: dto.filename
      }
    })

    return image
  }

  async findAll() {
    return await this.prisma.image.findMany()
  }

  async findOne(filename: string) {
    return await this.prisma.image.findUnique({
      where: {
        filename: filename
      }
    })
  }

  async remove(filename: string) {

    if (filename === undefined)
      throw new Error('Filename is undefined')

    const file = await this.prisma.image.findUnique({
      where: {
        filename: filename
      }
    })

    const imageExists = file !== null
    if (!imageExists)
      throw new Error('Filename doesn\'t exist')

    fs.unlinkSync(
      path.join(__dirname, '..', '..', 'uploads', filename)
    )

    return await this.prisma.image.delete({
      where: {
        filename: filename
      }
    })
  }
}
