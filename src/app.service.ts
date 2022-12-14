import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '<h1> Hello world</h1> <h2> h2 This is H2 </h2>';
  }
}
