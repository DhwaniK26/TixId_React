import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { MinLength, MaxLength, IsEmail } from "class-validator";
import { SeatStatus } from "./seatsStatus";
@Entity()  
export class User {
    @PrimaryGeneratedColumn() // Automatically generates a unique primary key
    userid!: number;

    @Column() // Maps to a column in the database
    @MinLength(2, { message: 'Username must be at least 2 characters long.' })
    username!: string;

    @Column({ unique: true }) 
    @MinLength(10, { message: 'Phone number should contain at least 10 digits.' })
    @MaxLength(10, { message: 'Phone number should contain at most 10 digits.' })
    phonenumber!: string;

    @Column() 
    @IsEmail({}, { message: 'Email is not valid.' })
    email!: string;

    @OneToMany(() => SeatStatus, (seatStatus) => seatStatus.userid)
    seatStatuses!: SeatStatus[];

}

