import { Controller, Get, Post, Res,HttpStatus } from "@nestjs/common"
import { Response } from "express";
@Controller('humans') 
export class HumansController {     @Post()
  create(@Res() res: Response) {
    res.status(HttpStatus.CREATED).json(["Apples","Banana","Mango","Opciones","Orange","Strawberry","Date"]);;
  }

  @Get()
  findAll(@Res() res: Response) {
     res.status(HttpStatus.OK).json(["Apples","Banana","Mango","Opciones","Orange","Strawberry","Date"]);
  }
}
