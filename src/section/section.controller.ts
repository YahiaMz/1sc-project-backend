import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SectionService } from './section.service';
import { CreateSectionDto } from './dto/create-section.dto';
import { UpdateSectionDto } from './dto/update-section.dto';
import { My_Helper } from 'src/MY-HELPER-CLASS';

@Controller('section')
export class SectionController {
  constructor(private readonly sectionService: SectionService) {}

  @Post('/create')
  async create(@Body() createSectionDto: CreateSectionDto) {
    let section = await this.sectionService.create(createSectionDto);
    return My_Helper.SUCCESS_RESPONSE(section);
  }

  @Get('/all')
  async findAll() {
    let sections = await this.sectionService.findAll();
   return My_Helper.SUCCESS_RESPONSE(sections);
  
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    let section = await this.sectionService.findOne(+id);
    return My_Helper.SUCCESS_RESPONSE(section);
  
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSectionDto: UpdateSectionDto) {
    return this.sectionService.update(+id, updateSectionDto);
  }

  @Delete('/delete/:id')
   async remove(@Param('id') id: string) {
    await this.sectionService.remove(+id);
      
    return My_Helper.SUCCESS_RESPONSE('section removed with success')
  }
}
