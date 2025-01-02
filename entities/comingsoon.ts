import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity()  
export class Comingsoon{
    @PrimaryColumn()               
    comingsoonid!: number;

    @Column() // Maps to a column in the database
    movietitle!: string;

}