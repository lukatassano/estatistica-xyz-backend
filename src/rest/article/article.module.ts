import { Module } from '@nestjs/common';
import { DbModule } from 'src/db/db.module';
import { ArticleController } from './article.controller';
import { ArticleService } from './article.service';

@Module({
  imports: [DbModule],
  controllers: [ArticleController],
  providers: [ArticleService],
})
export class ArticleModule {}
