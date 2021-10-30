import { User } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { DbService } from 'src/db/db.service';

@Injectable()
export class UserService {
  constructor(private db: DbService) {}

  create(user: User) {
    return this.db.user.create({
      data: { ...user },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });
  }

  findById(id: number) {
    return this.db.user.findFirst({
      where: {
        id,
      },
      select: {
        id: true,
        name: true,
        email: true,
        articleGroup: true,
        posts: true,
        trail: true,
      },
    });
  }
}
