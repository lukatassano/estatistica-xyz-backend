import { User } from '.prisma/client';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('api/user')
export class UserController {
  constructor(private service: UserService) {}

  @Post()
  create(@Body() user: User) {
    return this.service.create(user);
  }

  @Get(':id')
  findById(@Param() { id }: { id: string }) {
    return this.service.findById(Number(id));
  }
}
