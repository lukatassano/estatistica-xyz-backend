import { Trail } from '.prisma/client';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TrailService } from './trail.service';

@Controller('api/trail')
export class TrailController {
  constructor(private service: TrailService) {}

  @Post()
  create(@Body() trail: Trail) {
    return this.service.create(trail);
  }

  @Get()
  list() {
    return this.service.list();
  }

  @Get()
  findById(@Param() { id }: { id: string }) {
    return this.service.findById(Number(id));
  }
}
