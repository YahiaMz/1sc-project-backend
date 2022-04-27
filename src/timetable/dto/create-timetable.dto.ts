import { IsIn, IsInt, IsString } from "class-validator";

export class CreateTimetableDto {

    @IsString()
    name : string;

    @IsInt()
    semester : number;

    @IsInt()
    section_Id : number;


}
