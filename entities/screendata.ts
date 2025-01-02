import { Entity, PrimaryColumn, Column, ManyToOne, OneToMany,JoinColumn } from "typeorm";
import { Theatredata } from "./theatredata";
import { Showtime } from "./showtime";
import { Seats } from "./seats";
import { SeatStatus } from "./seatsStatus";

@Entity('screendata')  
export class Screendata {
    @PrimaryColumn()               
    screenid!: string;

    @Column() // Maps to a column in the database
    @ManyToOne(()=>Theatredata, (screen) => screen.screen)
    @JoinColumn({ name: "theatreid" })
    theatreid!: string;

    @Column()
    screenname!: string;

    @Column() 
    price!: string;

    @OneToMany(() => Showtime, (showtime) => showtime.screenid)
    showtimes!: Showtime[]; // Array of showtimes associated with this movie

    @OneToMany(() => Seats, (seat) => seat.screenid)
    seats!: Seats[] ;

    // @OneToMany(() => SeatStatus, (seatStatus) => seatStatus.screenid)
    // seatStatus!: SeatStatus[];

}