import { New } from "src/new/entities/new.entity";
import { Section } from "src/section/entities/section.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Group {

@PrimaryGeneratedColumn( )
id : number;

@Column({type : 'varchar' , length : 20})
name : string;

@Column({type : 'integer' , unsigned : true , nullable : true})
capacity : number;

@CreateDateColumn()
created_at: string;

@UpdateDateColumn()
updated_at: string;

@ManyToOne(type=> Section , { onDelete : 'SET NULL' , onUpdate : 'SET NULL'})
@JoinColumn({name : 'section_Id' } )
section : Section; 

@ManyToMany(type => New , 
    mNew => mNew.groups ,  
    {
    onDelete : 'CASCADE' , 
    onUpdate : 'CASCADE'
})
news  :New[];



}
