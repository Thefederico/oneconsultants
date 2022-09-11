import {
  Controller,
  Get,
  Post,
  Delete,
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

  @Get('users/:email')
  @HttpCode(HttpStatus.OK)
  getUserById(@Param() params: { name: string; email: string }) {
    const { email } = params;
    try {
      return this.appService.getUser(email);
    } catch (error) {
      throw error;
    }
  }

  @Get('users/:id/courses')
  @HttpCode(HttpStatus.OK)
  getCoursesUser(@Param() params: { id: number }) {
    const { id } = params;
    try {
      return this.appService.getCoursesUser(id);
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

  @Delete('users/:id')
  @HttpCode(HttpStatus.OK)
  deleteUser(@Param() params: { id: number }) {
    const { id } = params;
    try {
      return this.appService.deleteUser(id);
    } catch (error) {
      throw error;
    }
  }

  @Delete('users/courses/:idCourse')
  @HttpCode(HttpStatus.OK)
  deleteCourse(@Param() params: { idCourse: number }) {
    const { idCourse } = params;
    try {
      return this.appService.deleteCourse(idCourse);
    } catch (error) {
      throw error;
    }
  }
}
