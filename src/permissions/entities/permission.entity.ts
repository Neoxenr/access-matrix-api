import { Column, Entity } from 'typeorm';
import { PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'permission' })
export class Permission {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  claimType: string;

  @Column('varchar')
  description: string;
}
