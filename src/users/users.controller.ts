import { Metadata, ServerUnaryCall } from '@grpc/grpc-js';
import { Body, Controller, Post } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { CreateDoctorDto } from './dto/request/create-doctor.dto';
import { CreateUserDto } from './dto/request/create-user.dto';
import { UserFilterDto } from './dto/request/search-user-filter.dto';
import { UserResponseDto } from './dto/response/user-response.dto';
import { UsersService } from './services/users.service';

@Controller('users')
export class UsersController {
  
  constructor(private userService: UsersService) { }

  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<UserResponseDto>{
    return await this.userService.create(createUserDto);
  }

}
