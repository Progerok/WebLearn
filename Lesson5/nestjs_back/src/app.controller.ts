import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  
  constructor(private readonly appService: AppService) {}

  @Get()
  getStud(): string {
    return this.appService.getStud();
  }
  /* index() 
  {
    //return { students};
    return  All_studs.findAllStudents;
  } */
}
