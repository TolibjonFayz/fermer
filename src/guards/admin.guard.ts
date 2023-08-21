import {
  Injectable,
  ExecutionContext,
  UnauthorizedException,
  CanActivate,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Admin } from '../admin/schemas/admin.schema';

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}

  canActivate(context: ExecutionContext) {
    const req = context.switchToHttp().getRequest();
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      throw new UnauthorizedException('Admin unauthorized');
    }
    const bearer = authHeader.split(' ')[0];
    const token = authHeader.split(' ')[1];

    if (bearer != 'Bearer' || !token) {
      throw new UnauthorizedException('Admin unathorized2');
    }

    async function verify(token: string, jwtService: JwtService) {
      // const admin: Partial<Admin> = await jwtService.verifyAsync(token, {
      //   secret: process.env.ACCESS_TOKEN_KEY,
      // });
      // if (!admin) {
      //   throw new UnauthorizedException('Invalid token provided');
      // }
      // if (!admin.is_active) {
      //   throw new UnauthorizedException('Admin is not active');
      // }
      return true;
    }
    return verify(token, this.jwtService);
  }
}
