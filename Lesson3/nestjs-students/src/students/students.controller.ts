import { Controller, Get} from '@nestjs/common';
import { StudentsService } from './students.service';

@Controller('Students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Get()
  async findAll() {
    const Students = await this.studentsService.findAll();
    return Students;
  }

  
}