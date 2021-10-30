import { Module } from '@nestjs/common';
import { DbService } from 'src/db/db.service';
import { ArticleController } from './article.controller';
import { ArticleService } from './article.service';

@Module({
  imports: [],
  controllers: [ArticleController],
  providers: [DbService, ArticleService],
})
export class ArticleModule {}
