import { Test } from '@nestjs/testing'
import { ImageController } from './image.controller'
import { ImageService } from './image.service'
import { PrismaService } from './../prisma/prisma.service'
import { ConfigModule } from '@nestjs/config'
import { Image } from '@prisma/client'

describe('ImageController integration tests', () => {
    let controller: ImageController
    let service: ImageService

    beforeEach(async () => {
        const moduleRef = await Test.createTestingModule({
            imports: [ConfigModule],
            controllers: [ImageController],
            providers: [
                ImageService,
                PrismaService,
            ],
        }).compile()

        controller = moduleRef.get<ImageController>(ImageController)
        service = moduleRef.get<ImageService>(ImageService)
    })

    it('controller should be defined', () => {
        expect(controller).toBeDefined()
    })

    it('service should be defined', () => {
        expect(service).toBeDefined()
    })

    describe('should have minimum number of images', () => {
        let images: Image[]

        beforeAll(async () => {
            images = await service.findAll()
        })

        it('should have at least 6 carbs', () => {
            const carbsImgs = images.filter(img => img.is_it_carbs)
            expect(carbsImgs.length).toBeGreaterThanOrEqual(6)
        })
        it('should have at least 6 prots', () => {
            const protsImgs = images.filter(img => img.is_it_prots)
            expect(protsImgs.length).toBeGreaterThanOrEqual(6)
        })
        it('should have at least 4 fats', () => {
            const fatsImgs = images.filter(img => img.is_it_fats)
            expect(fatsImgs.length).toBeGreaterThanOrEqual(4)
        })
    })

    describe('REST operations', () => {
        
        let images: Image[]

        beforeAll(async () => {
            images = await controller.findAll()
        })

        it('should findAll', () => {
            expect(images).toBeTruthy()
        })

        it('should findOne', async () => {
            expect(await controller.findOne(images[0].filename)).toEqual({
                filename: expect.any(String),
                is_it_carbs: expect.any(Boolean),
                is_it_fats: expect.any(Boolean),
                is_it_prots: expect.any(Boolean),
                created_at: expect.any(Date)
            })
        })

    })
})