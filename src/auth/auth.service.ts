import { Injectable, NotAcceptableException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { AuthResultOutput } from './dto/auth-result-output.dto';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async validateUser(username: string, password: string) {
    const user = await this.userService.findByUsername(username);
    if (!user) {
      throw new NotAcceptableException('No se encontro el usuario');
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (user && isValidPassword) {
      const result = new AuthResultOutput();
      result.id = user.id;
      result.username = user.username;

      return result;
    }

    return null;
  }
}
