import { Controller, HttpCode, HttpStatus, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @HttpCode(HttpStatus.OK)
  @Get('')
  getAll() {
    return this.userService.getAll();
  }
}
