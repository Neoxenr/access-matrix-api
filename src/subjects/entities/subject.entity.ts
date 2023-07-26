import { Column, Entity } from 'typeorm';
import { PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'subject' })
export class Subject {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  name: string;

  @Column('int')
  idSubjectType: number;

  @Column('boolean')
  isDeleted: false;
}
