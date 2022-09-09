import { JwtGuard } from '../auth/guard/jwt.guard';
import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Put,
  UseGuards,
} from '@nestjs/common';
import { User } from '@prisma/client';
import { GetUser } from '../auth/decorator';

@UseGuards(JwtGuard)
@Controller('users')
export class UserController {
  // @UseGuards(JwtGuard)
  @Get('me')
  getUser(@GetUser() user: User) {
    return user;
  }

  @Put('')
  editUser() {
    return;
  }
}
