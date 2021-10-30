import { Module } from '@nestjs/common';
import { DbService } from 'src/db/db.service';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [DbService, UserService],
})
export class UserModule {}
