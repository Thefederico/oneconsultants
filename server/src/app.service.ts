import { Injectable, Inject } from '@nestjs/common';
import { Client } from 'pg';

export interface User {
  name: string;
  age: string;
  email: string;
}

export interface Course {
  name: string;
  program: string;
  status: string;
}

@Injectable()
export class AppService {
  constructor(@Inject('PG') private clientPg: Client) {}

  getHello(): string {
    return 'Hello World!';
  }

  async getUsers() {
    const query =
      'SELECT u.name, u.age, c.id, c.name AS course_name, c.program, c.status FROM my_db.public.users AS u LEFT JOIN my_db.public.courses AS c ON u.id = c.user_id';
    try {
      const res = await this.clientPg.query(query);
      return res.rows;
    } catch (error) {
      throw error;
    }
  }

  async getUser(id: number) {
    const query =
      'SELECT u.name, u.age, c.id, c.name AS course_name, c.program, c.status FROM my_db.public.users AS u LEFT JOIN my_db.public.courses AS c ON u.id = c.user_id WHERE u.id = $1';
    try {
      const res = await this.clientPg.query(query, [id]);
      return res.rows;
    } catch (error) {
      throw error;
    }
  }

  async createUser(user: User) {
    const query =
      'INSERT INTO public.users (name, age, email) VALUES ($1, $2, $3)';
    try {
      await this.clientPg.query(query, [user.name, user.age, user.email]);
      const newUser = await this.clientPg.query(
        'SELECT * FROM public.users WHERE id = (SELECT MAX(id) FROM public.users)',
      );
      return { 'User created': newUser.rows[0] };
    } catch (error) {
      throw error;
    }
  }

  async addCourse(course: Course, id: number) {
    const query =
      'INSERT INTO public.courses (name, program, status, user_id) VALUES ($1, $2, $3, $4)';
    try {
      await this.clientPg.query(query, [
        course.name,
        course.program,
        course.status,
        id,
      ]);
      const newCourse = await this.clientPg.query(
        'SELECT * FROM public.courses WHERE id = (SELECT MAX(id) FROM public.courses)',
      );
      return { 'Course created': newCourse.rows[0] };
    } catch (error) {
      throw error;
    }
  }

  async updateCourse(course: Course, id: number) {
    const query =
      'UPDATE public.courses SET name = $1, program = $2, status = $3 WHERE id = $4';
    try {
      await this.clientPg.query(query, [
        course.name,
        course.program,
        course.status,
        id,
      ]);
      const updatedCourse = await this.clientPg.query(
        'SELECT * FROM public.courses WHERE id = $1',
        [id],
      );
      return { 'Course updated': updatedCourse.rows[0] };
    } catch (error) {
      throw error;
    }
  }
}
