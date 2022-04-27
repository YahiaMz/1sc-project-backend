import { IsNumberString, IsString } from "class-validator";

export class CreateModuleDto {

    @IsNumberString()
    level_Id : number;

    @IsNumberString()
    semester : number;

    @IsString()
    name : string;
      
    @IsString( )
    shortName : string;

    @IsString()
    description : string;

    
}