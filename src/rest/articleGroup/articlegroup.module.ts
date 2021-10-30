import { Module } from '@nestjs/common';
import { DbService } from 'src/db/db.service';
import { ArticleController } from '../article/article.controller';
import { ArticleGroupService } from './articlegroup.service';

@Module({
  imports: [],
  controllers: [ArticleController],
  providers: [DbService, ArticleGroupService],
})
export class ArticleGroupModule {}
