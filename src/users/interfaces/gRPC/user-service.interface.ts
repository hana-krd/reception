import { Observable } from "rxjs";
import { CreateUserDto } from "../../dto/request/create-user.dto";
import { UserFilterDto } from "../../dto/request/search-user-filter.dto";
import { UserResponseDto } from "../../dto/response/user-response.dto";

export interface UserServiceGrpc{
    create(data: CreateUserDto): Promise<UserResponseDto>
    findAll(data: UserFilterDto): Promise<UserResponseDto[]>
}