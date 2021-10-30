import { Article } from '.prisma/client';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ArticleService } from './article.service';

@Controller('api/article')
export class ArticleController {
  constructor(private service: ArticleService) {}

  @Post()
  create(@Body() article: Article) {
    return this.service.create(article);
  }

  @Get(':id')
  findById(@Param() { id }: { id: string }) {
    return this.service.findById(Number(id));
  }
}
