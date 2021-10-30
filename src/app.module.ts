import { ArticleGroupController } from './rest/articleGroup/articlegroup.controller';
import { RestModule } from './rest/rest.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [RestModule],
  controllers: [ArticleGroupController],
  providers: [],
})
export class AppModule {}
