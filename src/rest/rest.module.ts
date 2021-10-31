import { Module } from '@nestjs/common';
import { ArticleModule } from './article/article.module';
import { ArticleGroupModule } from './articleGroup/articlegroup.module';
import { LoginModule } from './login/login.module';
import { TrailModule } from './trail/trail.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    UserModule,
    LoginModule,
    TrailModule,
    ArticleGroupModule,
    ArticleModule,
  ],
  controllers: [],
  providers: [],
})
export class RestModule {}
