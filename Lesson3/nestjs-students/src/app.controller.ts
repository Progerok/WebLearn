import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Students } from './students/student.entity';


@Controller('Students')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getStud():  Promise<Students[]>  {
    return this.appService.getStud();
  }
}
