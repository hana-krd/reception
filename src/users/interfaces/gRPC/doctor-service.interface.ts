import { UserResponseDto } from "../../dto/response/user-response.dto";

export interface DoctorServiceGrpc{
    create(CreateDoctorDto): Promise<UserResponseDto>
}