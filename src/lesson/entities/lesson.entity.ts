import { Group } from "src/group/entities/group.entity";
import { Module } from "src/module/module.entity";
import { Sale } from "src/sale/entities/sale.entity";
import { Teacher } from "src/teacher/teacher.entity";
import { Timetable } from "src/timetable/entities/timetable.entity";
import { Check, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
@Check(`"day" > 0 and "day < 8"`)
@Check(`"lesson_Type" = "TD" or "lesson_Type" = "TP" , "lesson_Type" = "COURS"`)
export class Lesson {
    @PrimaryGeneratedColumn()
    id : number;

    @Column({type :'tinyint' , unsigned : true})
    day : number;
  

    @Column({type :'varchar' , length : '10'})
    lesson_Type : string;
 // lessonType =  ( lessonType )? TD , COURS 

    @Column({type : 'time'})
     startingTime : string;

     @Column({type : 'time'})
     endingTime : string;


    @CreateDateColumn()
    created_at: string;
   
    @UpdateDateColumn()
    updated_at: string;


    @ManyToOne(type =>Timetable , {onDelete : 'CASCADE' , onUpdate : "CASCADE"})
    @JoinColumn({name: 'timeTable_Id'})
    timeTable : Timetable;

    
    @ManyToOne(type => Sale , {onDelete : 'CASCADE' , onUpdate : "CASCADE"})
    @JoinColumn(
        {
            name : 'sale_Id'
        }
    )
    sale : Sale;


    @ManyToOne(type => Teacher , { onDelete: 'CASCADE'  , onUpdate : 'CASCADE'})
    @JoinColumn({
        name : 'teacher_Id'
    })
    teacher : Teacher;


    @ManyToOne(type => Group , { onDelete: 'CASCADE'  , onUpdate : 'CASCADE'})
    @JoinColumn({
        name : 'group_Id'
    })
    group : Group;


    @ManyToOne(type => Module , { onDelete: 'CASCADE'  , onUpdate : 'CASCADE'})
    @JoinColumn({
        name : 'module_Id'
    })
    module: Module;


}
