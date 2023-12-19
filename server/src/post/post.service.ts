import { Injectable } from '@nestjs/common';

@Injectable()
export class PostService {
  findAll() {
    return [
      {
        id: 1,
        msg: 'Hello World!',
        date: Date.now(),
      },
      {
        id: 2,
        msg: 'Hello World!',
        date: Date.now(),
      },
      {
        id: 3,
        msg: 'Hello World!',
        date: Date.now(),
      },
    ];
  }

  findOne(id: string) {
    return {
      id,
      msg: 'Hello World!',
      date: Date.now(),
    };
  }
}
