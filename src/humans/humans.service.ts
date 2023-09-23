import { Injectable } from '@nestjs/common';
import { Humans } from '../interfaces/humans.interface';
@Injectable()
export class HumansService {
  private readonly humans: Humans[] = [];

  create(human: Humans) {
    this.humans.push(human);
  }
  findAll(): Humans[] {
    return this.humans;
  }
}
