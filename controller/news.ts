import { AppDataSource } from "../db"
import { Movienews } from "../entities/newsdata"
import { NewsDesc } from "../entities/newsdesc"

const getnews = async (req:any , res: any)=>{
   
    const newsdata = await AppDataSource.getRepository(Movienews).find({})
    
    if(!newsdata){
        return res.json({
            message:'no news'
        })
    }
    res.json({
        allnews: newsdata
    })
}

const getdesc = async (req:any, res:any)=>{

    const {usernewsid} = req.body
    try {

        const mydesc = await AppDataSource.getRepository(NewsDesc)
        .createQueryBuilder('newsdesc')
        .innerJoin('newsdesc.newsid','movienews')
        .where('newsdesc.newsid = :usernewsid',{usernewsid})
        .select([
            'movienews.title',
            'movienews.poster',
            'movienews.newsdate',
            'newsdesc.description'

        ])
        .getMany()

        if(!mydesc){
            return res.json({
                message:'no data'
            })
        }

        return res.json({
            newsdescript: mydesc
        })
       
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server error" });
    }
}

export {getnews,getdesc}