import { LoginController } from './login.controller';
import { LoginService } from './login.service';
import { Module } from '@nestjs/common';
import { DbService } from 'src/db/db.service';

@Module({
  imports: [],
  controllers: [LoginController],
  providers: [LoginService, DbService],
})
export class LoginModule {}
