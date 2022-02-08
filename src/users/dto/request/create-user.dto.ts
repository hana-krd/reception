import { Gender } from '../../gender.enum';
import { Nationality } from '../../models/nationality.model';
import { PhoneNumber } from '../../models/phone-number.model';
import { IsString, IsNotEmpty, IsMobilePhone, IsEnum, isDate, IsDate } from 'class-validator';
import { ApiParam, ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
    
  @ApiProperty({
    required: true,
    description: `user full name`,
    example: 'Emir Muhammadzadeh',
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    required: true,
    description: `user mobile number`,
    type: PhoneNumber,
    example: {
      countryCode: '964',
      number: '7707707700'
    },
  })
  @IsNotEmpty()
  mobile: PhoneNumber;
    

  @ApiProperty({
    required: true,
    description: `user national information, national code or passport code`,
    type: Nationality,
    example: {
      country: 'IRN',
      nationalCode: '0123456789',
      passportId: '1a1a1a1a11a1a'
    },
  })
  @IsNotEmpty()
  nationality: Nationality;

  @ApiProperty({
    required: true,
    description: `user gender, can be select between [UNKNOWN, MALE, FEMALE]`,
    enum: Gender,
    example: 'MALE',
  })
  @IsEnum(Gender)
  @IsNotEmpty()
  gender: Gender;
    
  @ApiProperty({
    required: true,
    description: `user birthday`,
    example: '2010-01-03T11:16:32.979Z',
  })
  @IsNotEmpty()
  birthday: Date;

}
