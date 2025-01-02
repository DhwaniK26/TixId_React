import { Entity, PrimaryColumn, Column ,JoinColumn, OneToMany, ManyToOne} from "typeorm";
import { Screendata } from "./screendata";

@Entity('seats')  
export class Seats{
    @PrimaryColumn()  
    @ManyToOne(() => Screendata, (screen : any) => screen.seats)
    @JoinColumn({ name: 'screenid' })        
    screenid!: string;

    @Column() // Maps to a column in the database
    start_num!: string;

    @Column()
    end_num!: string;

    @Column('text', { array: true })
    row!: string[];

}