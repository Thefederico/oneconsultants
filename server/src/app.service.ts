import { Injectable, Inject } from '@nestjs/common';
import { Client } from 'pg';

export interface User {
  name: string;
  age: string;
  email: string;
}

export interface Course {
  nameCourse: string;
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
    const query = 'SELECT * FROM public.users';
    try {
      const res = await this.clientPg.query(query);
      return res.rows;
    } catch (error) {
      throw error;
    }
  }

  async getUser(email: string) {
    const query = 'SELECT * FROM public.users WHERE email = $1';
    try {
      const res = await this.clientPg.query(query, [email]);
      return res.rows[0];
    } catch (error) {
      throw error;
    }
  }

  async getCoursesUser(id: number) {
    const query =
      'SELECT u.name, u.email, c.id, c.name AS course_name, c.program, c.status, c.user_id FROM my_db.public.users AS u LEFT JOIN my_db.public.courses AS c ON u.id = c.user_id WHERE u.id = $1';
    try {
      const res = await this.clientPg.query(query, [id]);
      const userData = {
        userName: res.rows[0].name,
        userEmail: res.rows[0].email,
      };
      return { userData: userData, courses: res.rows };
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
        course.nameCourse,
        course.program,
        course.status,
        id,
      ]);
      const newCourse = await this.clientPg.query(
        'SELECT * FROM public.courses WHERE user_id = $1',
        [id],
      );
      return { 'Course created': newCourse.rows[0] };
    } catch (error) {
      throw error;
    }
  }

  async deleteUser(id: number) {
    const query = 'DELETE FROM public.users WHERE id = $1';
    try {
      await this.clientPg.query(query, [id]);
      await this.clientPg.query(
        'DELETE FROM public.courses WHERE user_id = $1',
        [id],
      );
      return 'User deleted';
    } catch (error) {
      throw error;
    }
  }

  async deleteCourse(id: number) {
    const query = 'DELETE FROM public.courses WHERE id = $1';
    try {
      await this.clientPg.query(query, [id]);
      return 'Course deleted';
    } catch (error) {
      throw error;
    }
  }
}
