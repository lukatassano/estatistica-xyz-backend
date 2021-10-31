import { LoginController } from './login.controller';
import { LoginService } from './login.service';
import { Module } from '@nestjs/common';
import { DbModule } from 'src/db/db.module';

@Module({
  imports: [DbModule],
  controllers: [LoginController],
  providers: [LoginService],
})
export class LoginModule {}
