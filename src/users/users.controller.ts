import { Metadata, ServerUnaryCall } from '@grpc/grpc-js';
import { Body, Controller, Get, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { CreateDoctorDto } from './dto/request/create-doctor.dto';
import { CreateUserDto } from './dto/request/create-user.dto';
import { UserFilterDto } from './dto/request/search-user-filter.dto';
import { UserResponseDto } from './dto/response/user-response.dto';
import { UsersService } from './services/users.service';

@Controller('users')
export class UsersController {
  
  constructor(private userService: UsersService) { }

  @UsePipes(ValidationPipe)
  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<UserResponseDto>{
    return await this.userService.create(createUserDto);
  }

  @Get()
  async findAll(@Query() filters: UserFilterDto): Promise<UserResponseDto[]>{
    return await this.userService.findAll(filters);
  }

}
