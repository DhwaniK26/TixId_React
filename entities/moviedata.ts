import { Entity, PrimaryColumn, Column,OneToMany } from "typeorm";
import { Showtime } from "./showtime";

@Entity('moviedata')  
export class Moviedata {
    @PrimaryColumn()               
    movieid!: string;

    @Column() // Maps to a column in the database
    moviename!: string;

    @Column()
    director!: string;

    @Column() 
    genre!: string;

    @Column() 
    agerating!: string;

    @Column() 
    duration!: string;

    @Column() 
    movieposter!: string;

    @OneToMany(() => Showtime, (showtime) => showtime.movieid)
    showtimes!: Showtime[]; // Array of showtimes associated with this movie
}