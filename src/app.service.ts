import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    setTimeout(() => {throw new Error('hi')},3000)
    return 'Hello World22!';
  }
}
