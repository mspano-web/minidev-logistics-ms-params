import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

/* -------------------------------------- */

@Entity()
export class Params {
  @PrimaryGeneratedColumn('increment')
  id?: number;

  @Column()
  key: string;

  @Column()
  value: string;
  
}

/* -------------------------------------- */
