import { IsBoolean, IsNumber } from 'class-validator';

export class UpdateSubjectDto {
  name: string;

  @IsNumber()
  idSubjectType: number;

  @IsBoolean()
  isDeleted: false;
}
