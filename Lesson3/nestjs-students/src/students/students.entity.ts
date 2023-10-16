import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Students {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  FIO: string;

/*   @Column()
  Born: Date;
  
  @Column()
  id_Group: number;
  
  @Column()
  start_year: number; */
  

  @Column({ length: 100 })
  Born: string;
  
  @Column({ length: 100 })
  id_Group: string;
  
  @Column({ length: 100 })
  start_year: string;
}