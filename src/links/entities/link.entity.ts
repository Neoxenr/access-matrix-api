import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'link' })
export class Link {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int')
  idSubject: number;

  @Column('int')
  idPermission: number;
}
