import { Entity, PrimaryColumn, Column , OneToMany} from "typeorm";
import { Screendata } from "./screendata";

@Entity('theatredata')  
export class Theatredata {
    @PrimaryColumn()               
    theatreid!: string;

    @Column() // Maps to a column in the database
    theatrename!: string;

    @Column()
    location!: string;

    @OneToMany(() => Screendata, (screen) => screen.theatreid)
    screen!: Screendata[]; // Array of showtimes associated with this movie
}