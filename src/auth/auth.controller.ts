import { Controller, Post, Get, UseGuards, Request } from '@nestjs/common';
import { LocalAuthGuard } from './local.auth.guard';
import { AuthenticatedGuard } from './authenticated.guard';

@Controller('auth')
export class AuthController {
  @UseGuards(LocalAuthGuard)
  @Post('/login')
  login(@Request() req: any) {
    return { User: req.user, msg: 'user logged id' };
  }

  @Get('/protected')
  @UseGuards(AuthenticatedGuard)
  getHello(@Request() req: any): string {
    return req.user;
  }

  @Get('/logout')
  logout(@Request() req: any): any {
    req.session.destroy();
    return { msg: 'La sesion del usuario ha terminado' };
  }
}
