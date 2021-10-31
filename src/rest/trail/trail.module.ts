import { TrailController } from './trail.controller';
import { TrailService } from './trail.service';
import { Module } from '@nestjs/common';
import { DbModule } from 'src/db/db.module';

@Module({
  imports: [DbModule],
  controllers: [TrailController],
  providers: [TrailService],
})
export class TrailModule {}
