import { Injectable } from "@nestjs/common";
import { BaseSerializer } from "../../shared/interfaces/base-serializer.interface";
import { UserResponseDto } from "../dto/response/user-response.dto";
import { User } from "../schemas/user.schema";

@Injectable()
export class UserSerializer implements BaseSerializer<User, UserResponseDto> {
    
    serialize(inData: User): UserResponseDto {
        return inData;
    }

    serializeList(inData: User[]): { items: UserResponseDto[]; } {
        return { items: inData.map(user => this.serialize(user)) };
    }
}