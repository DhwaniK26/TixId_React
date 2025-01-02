import { Entity, PrimaryColumn, Column, ManyToMany, ManyToOne, JoinColumn } from "typeorm";
import { User } from "./user";
import { Showtime } from "./showtime";
import { Screendata } from "./screendata";

@Entity('seat_status')  
export class SeatStatus{
    @PrimaryColumn()       
    @ManyToOne(()=>User, (user) => user.seatStatuses) 
    @JoinColumn({name : 'userid'})       
    userid!: number;

    @Column() // Maps to a column in the database
    @PrimaryColumn()
    seatid!: string;

    @Column()
    @ManyToOne(()=>Showtime , (showtime) => showtime.seatStatuses)
    @JoinColumn({name : 'showtimeid'})
    showtimeid!:string
    
    @Column()
    // @ManyToOne(()=>Screendata , (screen) => screen.screenStatus)
    @ManyToOne(()=>Screendata )
    @JoinColumn({name : 'screenid'})
    screenid!:string

    @Column()
    status!:boolean

    @Column()
    date!:string

    @Column()
    payment!: boolean
}