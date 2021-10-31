import { TrailController } from './trail.controller';
import { TrailService } from './trail.service';
import { Module } from '@nestjs/common';
import { DbService } from 'src/db/db.service';

@Module({
  imports: [],
  controllers: [TrailController],
  providers: [TrailService, DbService],
})
export class TrailModule {}
