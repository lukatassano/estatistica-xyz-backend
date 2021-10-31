import { Module } from '@nestjs/common';
import { DbService } from 'src/db/db.service';
import { ArticleGroupController } from './articlegroup.controller';
import { ArticleGroupService } from './articlegroup.service';

@Module({
  imports: [],
  controllers: [ArticleGroupController],
  providers: [DbService, ArticleGroupService],
})
export class ArticleGroupModule {}
