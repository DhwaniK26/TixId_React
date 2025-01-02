import { Entity, PrimaryColumn, Column, ManyToOne, OneToMany,JoinColumn, OneToOne } from "typeorm";
import { Movienews } from "./newsdata";

@Entity('newsdesc')  
export class NewsDesc {

    @PrimaryColumn()  
    @OneToOne(()=>Movienews)      
    @JoinColumn({ name: "newsid" })     
    newsid!: string;

    @Column() // Maps to a column in the database
    description!: string;
}