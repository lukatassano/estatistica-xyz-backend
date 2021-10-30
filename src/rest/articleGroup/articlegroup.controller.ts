import { ArticleGroup } from '.prisma/client';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ArticleGroupService } from './articlegroup.service';

@Controller('/api/group/article')
export class ArticleGroupController {
  constructor(private service: ArticleGroupService) {}

  @Post()
  create(@Body() articleGroup: ArticleGroup) {
    return this.service.create(articleGroup);
  }

  @Get(':trailId')
  listByTrailId(@Param() { trailId }: { trailId: string }) {
    return this.service.listByTrailId(Number(trailId));
  }
}
