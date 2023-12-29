import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  create(createUserDto: CreateUserDto) {
    const user = new User();
    user.email = createUserDto.email;
    user.firstName = createUserDto.firstName;
    user.lastName = createUserDto.lastName;
    user.password = createUserDto.password;
    user.username = createUserDto.username;

    return this.userRepository.save(user);
  }

  findAll() {
    return this.userRepository.find();
  }

  findOne(id: number) {
    return this.userRepository.findOneBy({ id });
  }

  findByUsername(username: string) {
    return this.userRepository.findOneBy({ username });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    const user = new User();
    user.username = updateUserDto.username;
    user.firstName = updateUserDto.firstName;
    user.lastName = updateUserDto.lastName;
    user.password = updateUserDto.password;
    user.email = updateUserDto.email;
    user.id = id;

    return this.userRepository.save(user);
  }

  remove(id: number) {
    return this.userRepository.softDelete(id);
  }
}
