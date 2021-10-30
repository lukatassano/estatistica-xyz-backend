import { Article } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { DbService } from 'src/db/db.service';

@Injectable()
export class ArticleService {
  constructor(private db: DbService) {}

  create(article: Article) {
    return this.db.article.create({
      data: { ...article },
    });
  }

  findById(id: number) {
    return this.db.article.findFirst({
      where: {
        id,
      },
    });
  }
}
