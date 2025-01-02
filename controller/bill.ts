
import { AppDataSource } from "../db";
import { SeatStatus } from "../entities/seatsStatus";
import { Showtime } from "../entities/showtime";
import { User } from "../entities/user";


const bill =async (req: any, res: any) =>{

    const {
        usermoviename, 
        usertheatrename, 
        userscreenname, 
        usertime, 
        userdate,
        userphone,
    } = req.body
    
    const showtimedata = await AppDataSource.getRepository(Showtime)
    .createQueryBuilder("showtime")
    .innerJoin("showtime.screenid", "screen") 
    .innerJoin("screen.theatreid", "theatre") 
    .innerJoin("showtime.movieid", "movie") 
    .where("movie.moviename = :usermoviename",{usermoviename})
    .andWhere("theatre.theatrename = :usertheatrename",{usertheatrename})
    .andWhere("screen.screenname = :userscreenname",{userscreenname})
    .andWhere("showtime.time = :usertime",{usertime})
    .andWhere("showtime.date = :userdate",{userdate})
    .select([
        "showtime.showtimeid",
    ])
    .getMany()
    
    console.log("Showtime Data:", showtimedata);
    if(!showtimedata){
        console.log("no showtime data")
    }
   
    const getuserid = await AppDataSource.getRepository(User).findOne({
      where: { phonenumber: userphone },
      select: ['userid'] // Use an array for the field names
     });


     const showtimeid = showtimedata[0].showtimeid;
     console.log("this use",showtimeid)

    const myresult = await AppDataSource.getRepository(SeatStatus)
    .createQueryBuilder('seatstatus')
    .innerJoin('seatstatus.showtimeid','showtime')
    .innerJoin('seatstatus.screenid','screen')
    .innerJoin('screen.theatreid','theatre')
    .where('seatstatus.userid = :userid', {getuserid} )
    .where('seatstatus.showtimeid = :showtimeid',{showtimeid} )
    .select([
        "theatre.theatrename",
        "showtime.date",
        "screen.screenname",
        "screen.price",
        "seatstatus.seatid",
        
    ])
    .getMany()

    if(!myresult){
        return res.json({
            billerror: "no bill"
        })
    }
    else{
        return res.json({
            bill:myresult
        })
    }

}

export {bill}