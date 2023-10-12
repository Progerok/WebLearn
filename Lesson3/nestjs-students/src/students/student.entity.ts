//import { Entity, Column, PrimaryGeneratedColumn, IntegerType } from 'typeorm';
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, And, IntegerType } from "typeorm";

@Entity({ name: "Chelik" })
//export class Student {
export class Students extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  FIO: string;

  @Column()
  Born: Date;


  static findName(FIO: string) {
    return this.createQueryBuilder("Chelik")
      .where("Chelik.FIO = :FIO", { FIO })
      .getOne();
  }

  static findSudents() {
    return this.createQueryBuilder("Chelik")
      .getCount();
  }

  static findAllStudents() {
    return this.createQueryBuilder("Students")
      .getMany();
  }

}