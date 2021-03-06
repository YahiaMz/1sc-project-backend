import { Level } from "src/level/entities/level.entity";
import { Speciality } from "src/speciality/entities/speciality.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToOne, PrimaryGeneratedColumn, TableForeignKey, UpdateDateColumn } from "typeorm";

@Entity()
export class Batch {

    @PrimaryGeneratedColumn()
    id : number;

    @Column({type : 'varchar' , nullable : true})
    name : string;

    @Column({type:'integer' , unsigned : true , unique : true})
    year : number;

    @CreateDateColumn()
    created_at: string;
   
    @UpdateDateColumn()
    updated_at: string;


    @OneToOne(type => Level , {nullable : true , onDelete : 'CASCADE' , onUpdate : 'CASCADE'})
    @JoinColumn({name : 'level_Id' } )
    level : Level;

    @ManyToMany(type => Speciality , {cascade:true , onDelete : 'CASCADE' , onUpdate : 'CASCADE'})
    @JoinTable({ 
        name : 'batch_has_speciality' , 
        joinColumn: { name: 'batch_Id', referencedColumnName: 'id'},
        inverseJoinColumn : {name : 'speciality_Id' , referencedColumnName : 'id'}

    })
    public specialities : Speciality[];


}
