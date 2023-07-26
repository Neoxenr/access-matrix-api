import { IsNumber } from 'class-validator';

export class CreateLinkDto {
  @IsNumber()
  idSubject: number;

  @IsNumber()
  idPermission: number;
}
