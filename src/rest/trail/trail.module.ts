import { TrailController } from './trail.controller';
import { TrailService } from './trail.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [TrailController],
  providers: [TrailService],
})
export class TrailModule {}
