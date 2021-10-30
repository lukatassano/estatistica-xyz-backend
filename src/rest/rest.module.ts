import { Module } from '@nestjs/common';
import { ArticleModule } from './article/article.module';
import { ArticleGroupModule } from './articleGroup/articlegroup.module';
import { TrailModule } from './trail/trail.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule, TrailModule, ArticleGroupModule, ArticleModule],
  controllers: [],
  providers: [],
})
export class RestModule {}
