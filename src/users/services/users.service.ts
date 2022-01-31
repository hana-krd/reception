import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateDoctorDto } from '../dto/request/create-doctor.dto';
import { CreateUserDto } from '../dto/request/create-user.dto';
import { UserFilterDto } from '../dto/request/search-user-filter.dto';
import { UserResponseDto } from '../dto/response/user-response.dto';
import { DoctorServiceGrpc } from '../interfaces/gRPC/doctor-service.interface';
import { UserServiceGrpc } from '../interfaces/gRPC/user-service.interface';
import { User, UserDocument } from '../schemas/user.schema';
import { UserSerializer } from './user.serializer';


@Injectable()
export class UsersService implements OnModuleInit  {

    private userServiceGrpc: UserServiceGrpc;
    private doctorServiceGrpc: DoctorServiceGrpc;
    
    constructor(
        @Inject('USER_PACKAGE') private grpcClient: ClientGrpc,
        @InjectModel(User.name) private userModel: Model<UserDocument>,
        private userSerialize: UserSerializer
    ) { }

  onModuleInit() {
    this.userServiceGrpc = this.grpcClient.getService<UserServiceGrpc>('UserService');
    this.doctorServiceGrpc = this.grpcClient.getService<DoctorServiceGrpc>('DoctorService');
  }

    async create(createUserDto: CreateUserDto): Promise<UserResponseDto> {
        return await this.userServiceGrpc.create(createUserDto);
    }

    async findAll(filters: UserFilterDto): Promise<UserResponseDto[]> {
        return await this.userServiceGrpc.findAll(filters);
    }

    async createDoctor(data: CreateDoctorDto): Promise<UserResponseDto>{
        return await this.doctorServiceGrpc.create(data);
    }
}
