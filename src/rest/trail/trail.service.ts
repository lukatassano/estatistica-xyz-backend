import { Trail } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { DbService } from 'src/db/db.service';

@Injectable()
export class TrailService {
  constructor(private db: DbService) {}

  create(trail: Trail) {
    return this.db.trail.create({
      data: { ...trail },
    });
  }

  list() {
    return this.db.trail.findMany({
      select: {
        id: true,
        title: true,
        content: true,
        published: true,
        author: true,
      },
    });
  }

  findById(id: number) {
    return this.db.trail.findFirst({
      where: {
        id,
      },
      select: {
        id: true,
        title: true,
        content: true,
        author: true,
        articleGroup: true,
        published: true,
      },
    });
  }
}
