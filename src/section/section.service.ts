import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { My_Helper } from 'src/MY-HELPER-CLASS';
import { Speciality } from 'src/speciality/entities/speciality.entity';
import { Repository } from 'typeorm';
import { CreateSectionDto } from './dto/create-section.dto';
import { UpdateSectionDto } from './dto/update-section.dto';
import { Section } from './entities/section.entity';

@Injectable()
export class SectionService {

  constructor (@InjectRepository(Section) private sectionRepo : Repository<Section> , 
  @InjectRepository(Speciality) private specialityRepo : Repository<Speciality>
  ) { }


private async findSpecialityByIdOrThrowExp( speciality_Id : number ){

  let spec;
  try {
     spec = await this.specialityRepo.findOne({id : speciality_Id});
  } catch (error) {
    throw new HttpException( 
       My_Helper.FAILED_RESPONSE('something wrong ')
      , 201)
  }

  if ( !spec ) { 
    throw new HttpException( My_Helper.FAILED_RESPONSE('speciality not found !') , 201 );
  }

return spec;


}


  async create(createSectionDto: CreateSectionDto) {
 let speciality = await this.findSpecialityByIdOrThrowExp(createSectionDto.speciality_Id)
 let section;
 try {
  section = this.sectionRepo.create({name : createSectionDto.name });
    section.speciality = speciality;
    await this.sectionRepo.save(section);
 } catch (error) {
  throw new HttpException( 
    My_Helper.FAILED_RESPONSE('something wrong while creating Section ')
   , 201) }

return section;

  }

  async findAll() {
try {
   return await this.sectionRepo.find({loadRelationIds:true});
} catch (e ) {
  throw new HttpException( 
    My_Helper.FAILED_RESPONSE('something wrong while creating Section ')
   , 201) 
}
  }

  async findOne(speciality_Id: number) {
    let section;
    try {
      section = await this.sectionRepo.findOne({
        where : {id : speciality_Id},
        relations : ['speciality']
       });
      if ( section ) return section;
    } catch (error) {
      console.log(error.message);
      throw new HttpException(My_Helper.FAILED_RESPONSE('Something wrong , Id must be a number') , 201);     
    }

    throw new HttpException(My_Helper.FAILED_RESPONSE('section not found !') , 201);

  }

  update(id: number, updateSectionDto: UpdateSectionDto) {
    return `This action updates a #${id} section`;
  }

  async remove(id: number) {
    let sectionToRemove = await this.findOne(id); 
    await this.sectionRepo.remove(sectionToRemove);
  }


 public async findSectionByIdOrThrowException( id : number) {
  let section;
  try {
    section = await this.sectionRepo.findOne({
      where : {id : id},
     });
    if ( section ) return section;
  } catch (error) {
    console.log(error.message);
    throw new HttpException(My_Helper.FAILED_RESPONSE('Something wrong , Id must be a number') , 201);     
  }
  throw new HttpException(My_Helper.FAILED_RESPONSE('section not found !') , 201);
 }
}