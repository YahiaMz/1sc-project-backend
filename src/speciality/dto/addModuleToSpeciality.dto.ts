import { IsNumberString } from "class-validator";

export class AddModuleToSpecialityDto { 

    @IsNumberString()
    speciality_Id : number;

    @IsNumberString()
    module_Id : number;

    @IsNumberString()
    coef : number;

    @IsNumberString()
    semester : number;


}