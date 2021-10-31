import { Module } from '@nestjs/common';
import { DbModule } from 'src/db/db.module';
import { ArticleGroupController } from './articlegroup.controller';
import { ArticleGroupService } from './articlegroup.service';

@Module({
  imports: [DbModule],
  controllers: [ArticleGroupController],
  providers: [ArticleGroupService],
})
export class ArticleGroupModule {}
