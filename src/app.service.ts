import { HttpException, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getError(er: number) {
    if (er == 200) {
      return {
        data: 'Hello',
      };
    }
    throw new HttpException('Ошибочка!', er);
  }
}
