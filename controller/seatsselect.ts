import { AppDataSource } from "../db";
import { Seats } from "../entities/seats";
import { SeatStatus } from "../entities/seatsStatus";
import { Showtime } from "../entities/showtime";

const displaySeats = async (req : any , res : any)=>{
   try{
    
    const {userscreenname, usertheatrename} = req.body
    
      const seatdata = await AppDataSource.getRepository(Seats)
      .createQueryBuilder("seats")
      .innerJoin("seats.screenid", "screendata") // Join Seats with Screendata
      .where("screendata.screenname = :userscreenname", { userscreenname })
      .select([
          "seats.screenid",
          "seats.row",
          "seats.start_num",
          "seats.end_num"
      ])
      .getOne();

      if(!seatdata){
        return res.json({
          message : "no data!"
        })
      }else{
        return res.json({
          seatkadata:seatdata
        })
      }

   }catch(error){
    return res.status(500).json({
      message: "Internal server error",
      error: error instanceof Error ? error.message : "Unknown error"
    });
   }
}


const getSeatAvailability = async (req: any, res: any) => {
  try {

    const {
      usermoviename, 
      usertheatrename, 
      userscreenname, 
      usertime, 
      userdate
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

    const showtimeid = showtimedata[0].showtimeid;

    // //---------------seat unavail------------------------
    const unavail = await AppDataSource.getRepository(SeatStatus)
    .createQueryBuilder('seatstatus')
    .andWhere('seatstatus.date = :userdate', { userdate })
    .andWhere('seatstatus.showtimeid = :showtimeid', { showtimeid }) // Pass showtimeid separately
    .andWhere('seatstatus.status = false')
    .select(['seatstatus.seatid'])
    .getMany(); // Use getMany() to execute the query and return results
  
    if(!unavail){
      return res.json({
         message: 'all available'
      })
    
    }

    res.json({
        unavailable :unavail
    })

  } catch (error) {
    console.error("Error fetching seat availability:", error);
    return res.status(500).json({
      message: "Internal server error",
      error: error instanceof Error ? error.message : "Unknown error"
    });
  }
};

export {displaySeats,getSeatAvailability}