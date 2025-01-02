import { Entity, PrimaryColumn, Column, ManyToOne, OneToMany,JoinColumn } from "typeorm";

@Entity('movienews')  
export class Movienews {

    @PrimaryColumn()               
    newsid!: string;

    @Column() // Maps to a column in the databas
    title!: string;

    @Column()
    newsdate!: string;

    @Column()
    poster!: string;
}