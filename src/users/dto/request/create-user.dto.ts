import { Gender } from '../../gender.enum';
import { Nationality } from '../../models/nationality.model';
import { PhoneNumber } from '../../models/phone-number.model';
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
    
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  mobile: PhoneNumber;
    
  @IsNotEmpty()
  nationality: Nationality;
    
  @IsNotEmpty()
  gender: Gender;
    
  @IsNotEmpty()
  birthday: Date;
}
