import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsOptional, IsString } from "class-validator";
import { Gender } from "../../gender.enum";
import { Nationality } from "../../models/nationality.model";
import { Paginate } from "../../models/paginate.model";
import { PhoneNumber } from "../../models/phone-number.model";

export class UserFilterDto {


    @ApiProperty({
        required: false,
        description: `user full name`,
        example: 'Emir Muhammadzadeh',
    })
    @IsOptional()
    @IsString()
    name?: string
    
    @ApiProperty({
        required: false,
        description: `user mobile number`,
        type: PhoneNumber,
        example: {
            countryCode: '964',
            number: '7707707700'
        },
    })
    @IsOptional()
    mobile?: PhoneNumber


    @ApiProperty({
        required: false,
        description: `user national information, national code or passport code`,
        type: Nationality,
        example: {
            country: 'IRN',
            nationalCode: '0123456789',
            passportId: '1a1a1a1a11a1a'
        },
    })
    @IsOptional()
    nationality?: Nationality


    @ApiProperty({
        required: false,
        description: `user gender, can be select between [UNKNOWN, MALE, FEMALE]`,
        enum: Gender,
        example: 'MALE',
    })
    @IsEnum(Gender)
    @IsOptional()
    gender?: Gender;

    paginate?: Paginate
}