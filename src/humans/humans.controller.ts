import { Controller, Get, Param } from '@nestjs/common';

@Controller('humans')
export class HumansController {
  @Get()
  findAll(): string {
    return 'This is a human';
  }
  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `This is the human no ${id}`;
  }
}
