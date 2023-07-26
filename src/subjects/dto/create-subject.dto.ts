import { IsBoolean, IsNumber } from 'class-validator';

export class CreateSubjectDto {
  name: string;

  @IsNumber()
  idSubjectType: number;

  @IsBoolean()
  isDeleted: false;
}
