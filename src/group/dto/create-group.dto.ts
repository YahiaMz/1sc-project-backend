import { IsNumberString, IsString } from "class-validator";

export class CreateGroupDto {

    @IsString()
    name : string;

    @IsNumberString()
    section_Id : number;

}
