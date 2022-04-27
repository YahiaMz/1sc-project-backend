import { IsNumberString, IsString } from "class-validator";

export class CreateSectionDto {

    @IsNumberString()
    speciality_Id : number;

    @IsString()
    name : string;

    
}