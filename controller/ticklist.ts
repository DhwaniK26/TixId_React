import { AppDataSource } from "../db";
import { SeatStatus } from "../entities/seatsStatus";
import { User } from "../entities/user";

const ticketList = async (req: any, res: any) => {
  const { userphone } = req.body;

  const getuserid = await AppDataSource.getRepository(User).findOne({
    where: { phonenumber: userphone },
    select: ["userid"], // Use an array for the field names
  });

  if (!getuserid) {
    return res.json({
      message: " no user !",
    });
  }

  const userID = getuserid.userid

  const getdata = await AppDataSource.getRepository(SeatStatus)
  .createQueryBuilder("seatstatus")
  .innerJoin("seatstatus.screenid", "screen")
  .innerJoin("seatstatus.showtimeid", "showtime")
  .innerJoin("showtime.movieid", "movie")
  .innerJoin("screen.theatreid", "theatre")
  .where("seatstatus.userid = :userID", { userID })
  .select([
    "DISTINCT movie.moviename as moviename",
    "showtime.time as time",
    "showtime.date as date",
    "screen.screenname as screenname", 
    "theatre.theatrename as theatrename",
    "seatstatus.payment as payment"
  ])
  .groupBy("movie.moviename")
  .addGroupBy("showtime.time")
  .addGroupBy("showtime.date")
  .addGroupBy("screen.screenname")
  .addGroupBy("theatre.theatrename")
  .addGroupBy("seatstatus.payment")
  .getRawMany();

// If you need to send this in an Express route:
res.json({
  status: "success",
  data: getdata
});

};

export { ticketList };
