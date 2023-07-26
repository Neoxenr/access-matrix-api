import { IsNumber } from 'class-validator';

export class UpdateLinkDto {
  @IsNumber()
  idSubject: number;

  @IsNumber()
  idPermission: number;
}
