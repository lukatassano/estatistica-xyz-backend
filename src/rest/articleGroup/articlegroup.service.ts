import { ArticleGroup } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { DbService } from 'src/db/db.service';

@Injectable()
export class ArticleGroupService {
  constructor(private db: DbService) {}

  create(articleGroup: ArticleGroup) {
    return this.db.articleGroup.create({
      data: {
        ...articleGroup,
      },
    });
  }

  findById(id: number) {
    return this.db.articleGroup.findFirst({
      where: {
        id,
      },
      select: {
        id: true,
        title: true,
        article: true,
        author: true,
        trail: true,
        published: true,
      },
    });
  }

  listByTrailId(trailId: number) {
    return this.db.articleGroup.findMany({
      where: {
        trailId: trailId,
      },
      select: {
        id: true,
        title: true,
        trailId: true,
        article: true,
        author: true,
        published: true,
      },
    });
  }
}
