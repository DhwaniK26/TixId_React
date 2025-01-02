import { AppDataSource } from "../db";
import { Showtime } from "../entities/showtime";
import { Theatredata } from "../entities/theatredata";
import { Moviedata } from "../entities/moviedata";
import { Screendata } from "../entities/screendata";


const choosesch = async (req:any, res:any) => {
  
    const {userlocation,usermoviename,userdate} = req.body

    const movie = await AppDataSource.getRepository(Moviedata).findOne({
        where: { 
            moviename: usermoviename 
        }
    });
    

    if (!movie) {
        // If the movie is not found, return an error
        return res.status(404).json({ message: 'Movie not found' });
    }
    
    const getdate = await AppDataSource.getRepository(Showtime)
    .createQueryBuilder("showtime")
    .innerJoin("showtime.screenid", "screen") // Join the Screendata entity
    .innerJoin("screen.theatreid", "theatre") // Join the Theatre entity using the foreign key
    .innerJoin("showtime.movieid", "movie") // Join the Moviedata entity
    .where("movie.moviename = :usermoviename", { usermoviename })
    .andWhere("theatre.location = :userlocation", { userlocation })
    .andWhere("showtime.date = :userdate", { userdate })
    .select([
        "screen.screenname",   // Select screenname from Screendata
        "showtime.time",       // Select time from Showtime
        "screen.price",        // Select price from Screendata
        "theatre.theatrename" , // Select theatrename from Theatre
        "showtime.date"
    ])
    .getMany();

    console.log('Hello: ' + getdate)
    
    res.json({
        answer: getdate
    })
    
}

module.exports = {choosesch}