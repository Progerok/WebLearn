import { Injectable } from '@nestjs/common';
import { IntegerType, Table } from 'typeorm';

@Injectable()
export class AppService {
  getStud(): string {    
      return 'Студенты.';
  
  }
}
