import { Injectable } from '@nestjs/common';
import { Students } from './students/student.entity';
import { IntegerType, Table } from 'typeorm';

@Injectable()
export class AppService {
  getStud(): Promise<Students[]> {    
      return Students.findAllStudents();
  
  }
}
