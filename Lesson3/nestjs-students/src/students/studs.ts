import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, And, IntegerType } from "typeorm";
import { Stud_class } from './stud.model';

export const students: Stud_class[] = [
 new Stud_class('The first one', 1),
 new Stud_class('The second one', 2)
]

export class All_studs extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    FIO: string; 

    static findAllStudents() {
      return this.createQueryBuilder("Students")
        .getMany();
    }
  
  }