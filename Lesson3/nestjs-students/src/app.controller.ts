import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
//import { Students } from './students/student.entity';
import { students } from './students/studs';
import { All_studs } from './students/studs';


/* @Controller('Students')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getStud():  Promise<Students[]>  {
    return this.appService.getStud();
  }
}
 */

@Controller()
export class AppController {
  @Get()
  index() 
  {
    //return { students};
    return  All_studs.findAllStudents;
  }
}
