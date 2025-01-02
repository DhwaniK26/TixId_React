import { Entity, PrimaryColumn, Column, OneToMany, ManyToOne,JoinColumn } from "typeorm";
import { Moviedata } from "./moviedata";
import { Screendata } from "./screendata";
import { SeatStatus } from "./seatsStatus";

@Entity('movieshowtime')  
export class Showtime {
    @PrimaryColumn()               
    showtimeid!: number;

    @Column()
    @ManyToOne(() => Screendata, (screen) => screen.showtimes)
    @JoinColumn({ name: "screenid" })
    screenid!: string;

    @Column()
    @ManyToOne(() => Moviedata, (movie) => movie.showtimes)
    @JoinColumn({ name: "movieid" }) // Explicitly define the column name for the foreign key
    movieid!: string;

    @Column() 
    date!: string;

    @Column() 
    time!: string;

    @OneToMany(() => SeatStatus, (seatStatus) => seatStatus.screenid)
    seatStatuses!: SeatStatus[];

}