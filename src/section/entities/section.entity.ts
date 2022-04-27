import { Speciality } from "src/speciality/entities/speciality.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Section { 

    @PrimaryGeneratedColumn()
    id : number;

    @Column({type : 'varchar' } )
    name : string;

    @CreateDateColumn()
    created_at: string;
   
    @UpdateDateColumn()
    updated_at: string;

    @ManyToOne(type => Speciality ,  { onDelete : 'CASCADE' , onUpdate : 'CASCADE' } )
    @JoinColumn({name : 'speciality_Id' })
    speciality : Speciality;
    
}