import { Module } from "src/module/module.entity";
import { Column, CreateDateColumn, Entity,  OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { SpecialityHasManyMoudules } from "./specialityHasManyModule.entity";

@Entity()
export class Speciality 
{
    @PrimaryGeneratedColumn({type : 'bigint' , unsigned : true})
    id : number;

    @Column({type : 'varchar' ,length : 50 , unique : true , nullable : false})
    name : string;

    @Column({type : 'varchar', nullable : true , length: 500} )
    description : string; 

    @Column({type : 'varchar' , nullable : true})
    imageUrl : string;

    @CreateDateColumn()
    created_at: string;
   
    @UpdateDateColumn()
    updated_at: string;

    @OneToMany(type => SpecialityHasManyMoudules , shm => shm.speciality , {onDelete : 'CASCADE' , onUpdate : 'CASCADE'})
    modules : SpecialityHasManyMoudules[];

}
