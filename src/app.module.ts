import { RestModule } from './rest/rest.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [RestModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
