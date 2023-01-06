import { Controller, Get, Post, Body, Patch, Param, Delete, UploadedFile, ParseFilePipeBuilder, UseInterceptors, FileTypeValidator, ParseFilePipe } from '@nestjs/common';
import { ImageService } from './image.service';
import { ImageDto } from './dto/image.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@Controller('image')
export class ImageController {
  constructor(private readonly imageService: ImageService) { }

  @Post()
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      destination: (req, file, cb) => {
        cb(null, 'uploads/')
      },
      filename: (req, file, cb) => {
        cb(null, Date.now() + '.svg')
      }
    })
  }))
  async create(@Body() dto: ImageDto,
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new FileTypeValidator({ fileType: 'image/svg' }),
        ],
      })
    ) file: Express.Multer.File) {

    return await this.imageService.create({
      filename: file.filename,
      ...dto,
    });
  }

  @Get()
  async findAll() {
    return await this.imageService.findAll();
  }

  @Get(':filename')
  async findOne(@Param('filename') filename: string) {
    return await this.imageService.findOne(filename);
  }

  @Delete(':id')
  async remove(@Param('filename') filename: string) {
    return await this.imageService.remove(filename);
  }
}
