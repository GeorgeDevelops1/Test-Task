import { Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class JwtService {
  private readonly secretKey = process.env.JWT_SECRET || 'your-secret-key-change-in-production';
  private readonly expiresIn = '1h';

  sign(userData: Record<string, any>): { token: string } {
    try {
      const token = jwt.sign(userData, this.secretKey, {
        expiresIn: this.expiresIn,
      });
      return { token };
    } catch (error) {
      throw new Error(`JWT sign შეცდომა: ${error.message}`);
    }
  }

  decode(token: string): { valid: boolean; user?: Record<string, any>; error?: string } {
    try {
      const decoded = jwt.verify(token, this.secretKey) as Record<string, any>;
      return {
        valid: true,
        user: decoded,
      };
    } catch (error) {
      if (error.name === 'TokenExpiredError') {
        return {
          valid: false,
          error: 'ტოკენი ვადაგასულია',
        };
      }
      if (error.name === 'JsonWebTokenError') {
        return {
          valid: false,
          error: 'არასწორი ტოკენი',
        };
      }
      return {
        valid: false,
        error: `ტოკენის დეკოდირების შეცდომა: ${error.message}`,
      };
    }
  }
}
