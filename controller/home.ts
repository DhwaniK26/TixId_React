import { Moviedata } from "../entities/moviedata"
import { AppDataSource } from "../db"
import { Comingsoon } from "../entities/comingsoon"

const bookmovies = async (req : any, res: any)=>{
    
    const userRepository = AppDataSource.getRepository(Moviedata)
    
    const getmoviedata = await userRepository.find()

    res.json({
        movielist: getmoviedata
    })
}

const comingsoonMovies = async (req: any, res: any)=>{

    const userRepository = AppDataSource.getRepository(Comingsoon)

    const comingsoonMovies = await userRepository.find()
    res.json({
        comingsoonlist : comingsoonMovies
    })
}

export {bookmovies, comingsoonMovies}