import { User } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { hash } from 'bcrypt';
import { DbService } from 'src/db/db.service';

@Injectable()
export class UserService {
  constructor(private db: DbService) {}

  async create(user: User) {
    const passwordHash = await hash(user.password, 8);
    return this.db.user.create({
      data: { ...user, password: passwordHash },
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
        article: true,
        trail: true,
      },
    });
  }

  findByEmail(email: string) {
    return this.db.user.findFirst({
      where: {
        email,
      },
    });
  }
}
