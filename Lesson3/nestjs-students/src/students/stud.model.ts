export class Stud_class {
    id: number;
  
    FIO: string;
    
    constructor (FIO: string, id?: number) {
      this.id = id;
      this.FIO = FIO;
    }
  }