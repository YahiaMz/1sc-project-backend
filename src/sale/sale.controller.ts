import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SaleService } from './sale.service';
import { CreateSaleDto } from './dto/create-sale.dto';
import { UpdateSaleDto } from './dto/update-sale.dto';
import { My_Helper } from 'src/MY-HELPER-CLASS';

@Controller('sale')
export class SaleController {
  constructor(private readonly saleService: SaleService) {}

  @Post('/create')
  async create(@Body() createSaleDto: CreateSaleDto) {
    let newSale = await this.saleService.create(createSaleDto);
    return My_Helper.SUCCESS_RESPONSE(newSale);
  }

  @Get('/all')
 async findAll() {
    let sales = await this.saleService.findAll();
    return My_Helper.SUCCESS_RESPONSE(sales);
  }

  @Get('/:id')
  findOne(@Param('id') id: string) {
    return this.saleService.findOne(+id);
  }

  @Patch('/update/:id')
  async update(@Param('id') id: string, @Body() updateSaleDto: UpdateSaleDto) {
    let updatedSale = await this.saleService.update( +id , updateSaleDto);
    return My_Helper.SUCCESS_RESPONSE(updateSaleDto);
    }

  @Delete('/delete/:id')
 async remove(@Param('id') id: string) {
    await this.saleService.remove(+id)
    return My_Helper.SUCCESS_RESPONSE('sale removed with success');
  }
}
