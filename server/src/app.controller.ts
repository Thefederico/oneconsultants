import {
  Controller,
  Get,
  Post,
  Put,
  Body,
  Param,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';

import { AppService } from './app.service';
import { User, Course } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('users')
  @HttpCode(HttpStatus.OK)
  getUsers() {
    return this.appService.getUsers();
  }

  @Get('users/:id')
  @HttpCode(HttpStatus.OK)
  getUser(@Param() params: { id: number }) {
    const { id } = params;
    try {
      return this.appService.getUser(id);
    } catch (error) {
      throw error;
    }
  }

  @Post('users')
  @HttpCode(HttpStatus.CREATED)
  postUser(@Body() payload: User) {
    try {
      return this.appService.createUser(payload);
    } catch (error) {
      throw error;
    }
  }

  @Post('users/:id/courses')
  @HttpCode(HttpStatus.CREATED)
  postCourse(@Param() params: { id: number }, @Body() payload: Course) {
    const { id } = params;
    try {
      return this.appService.addCourse(payload, id);
    } catch (error) {
      throw error;
    }
  }

  // @PUT('users/:id/courses/:courseId')
}
