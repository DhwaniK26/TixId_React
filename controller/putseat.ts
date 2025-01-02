import { AppDataSource } from "../db";
import { SeatStatus } from "../entities/seatsStatus";
import { Showtime } from "../entities/showtime";
import { User } from "../entities/user";

const insertSeats = async (req:any , res: any) => {

    const divideData = JSON.parse(req.body.data);
    console.log("Received Seat Data:", divideData);
  
    // Extract common data from the first item (assuming all items have same movie, theatre, etc. details)
    const {
      usermoviename, 
      usertheatrename, 
      userscreenname, 
      usertime, 
      username,
      userdate,
      userpayment
    } = divideData[0];
  
  
    console.log("helllllloooooooooooooooooo",divideData[0])
  
    const showtimedata = await AppDataSource.getRepository(Showtime)
      .createQueryBuilder("showtime")
      .innerJoinAndSelect("showtime.screenid", "screen") 
      .innerJoinAndSelect("screen.theatreid", "theatre") 
      .innerJoinAndSelect("showtime.movieid", "movie") 
      .where("movie.moviename = :usermoviename",{usermoviename})
      .andWhere("theatre.theatrename = :usertheatrename",{usertheatrename})
      .andWhere("screen.screenname = :userscreenname",{userscreenname})
      .andWhere("showtime.time = :usertime",{usertime})
      .andWhere("showtime.date = :userdate",{userdate})
      .select([
        "showtime.showtimeid",
        "screen.screenid"
      ])
      .getMany()
      
      console.log("Showtime Data:", showtimedata);
  
      //----------------------------------------------------
      if (!showtimedata || showtimedata.length === 0) {
        return res.json({
          nooooo:"no showtime found"
        })
    
      }
      //----------------------------------------------------
  
      const showtime = showtimedata[0];
      console.log("Extracted Showtime Object:", showtime);  // Log the specific object
  
      // Check if screenid is present
      const screenId = showtime.screenid ? (showtimedata[0] as any).screenid.screenid : undefined;
      console.log("Screen ID:", screenId);
  
      if (!screenId) {
        return res.json({
          message: "Screen ID not found"
        });
  
      }
  
      const getusername = await AppDataSource.getRepository(User).findOne({
        where: { phonenumber: username },
        select: ['userid'] // Use an array for the field names
      });
  
  
      if( !getusername){
        return res.json({
          message:"no userdata"
        })
  
      }
  
      // -----------------------------------------
     const insertedData = [];
      for (const seat of divideData) {
         
        if(seat.userpayment == false){
            const insertResult = await AppDataSource.getRepository(SeatStatus)
            .createQueryBuilder()
            .insert()
            .into(SeatStatus)
            .values({
            userid: Number(getusername.userid),
            seatid: seat.userseatid,
            showtimeid: String(showtime.showtimeid),
            screenid: String(screenId),
            status: true,
            date:seat.userdate,
            payment:userpayment
            })
            .execute();
        
            if (insertResult) {
                insertedData.push(insertResult);
            }
        }else{
  
        const insertResult = await AppDataSource.getRepository(SeatStatus)
          .createQueryBuilder()
          .insert()
          .into(SeatStatus)
          .values({
            userid: Number(getusername.userid),
            seatid: seat.userseatid,
            showtimeid: String(showtime.showtimeid),
            screenid: String(screenId),
            status: false,
            date:seat.userdate,
            payment:userpayment
          })
          .execute();
  
        if (insertResult) {
          insertedData.push(insertResult);
        }
      }

    }
      // Send a single response after processing all iterations
      if(insertedData.length > 0){
       return res.json({
         message: "Seats inserted successfully",
         insertedSeats: insertedData,
       });
      }else{
        res.json({
          message: "no data inserted",
        });
      }
  
  }

  export {insertSeats}