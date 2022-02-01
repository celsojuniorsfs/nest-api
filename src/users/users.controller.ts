import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  read() {
    return this.usersService.list();
  }

  @Post()
  create(@Body() body) {
    return this.usersService.save(body);
  }

  @Put(':id')
  update(@Param('id') userId: number, @Body() bodyUpdate) {
    return {
      userId,
      bodyUpdate,
    };
  }

  @Delete(':id')
  remove(@Param('id') id) {
    return { id };
  }
}
