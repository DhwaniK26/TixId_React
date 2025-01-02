
const {jwtverifyToken, generateToken} = require("../middleware/jwtauth")
import { AppDataSource } from "../db";
import { User } from "../entities/user";
import { validate } from "class-validator";

const signupHandler = async (req: any, res: any) => {

  const {username, phonenumber, email} = req.body
  
  const userRepository = AppDataSource.getRepository(User);

  try{

    const user = new User();
    user.email = email;
    user.phonenumber = phonenumber;
    user.username = username;
    
    const errors = await validate(user);
    if (errors.length > 0) {
      return res.status(400).json({
        status: 0,
        // message: "Validation failed",
        errors: errors.map(error => ({
          property: error.property,
          constraints: error.constraints,
          value: error.value 
        })),
      });
    }

    const findData = await userRepository.findOneBy({phonenumber})
    if (findData) {
     return res.status(400).json({ 
         status: 0, 
         message: "Phone number already exists." 
     });
   }

   const users = await userRepository.insert({username, phonenumber, email});

   if(users){

     const data  = await userRepository.findOneBy({userid: users.identifiers[0].userid})
      
     const payload = {
       userid: data?.userid ,
       phonenumber: data?.phonenumber
     }

     const token = generateToken(payload)

     return res.status(200).json({
       allusers: data,
       status: 1,
       message:"Signup Successfull",
       token:token
     });

   } else{
    return res.status(400).json({
       status: 0,
       message:"Signup Failed"
     })
   }
   }catch(error){
     return res.status(500).json({
       status:0,
       message:'something went wrong'
     })
   }
}
  
const loginHandler = async (req: any, res: any) => {
    
     const {phonenumber} = req.body
     
     const userRepository = AppDataSource.getRepository(User);

     try{

      if(phonenumber == " "){
        res.status(500).json({
          status:0,
          message:'Enter Phone number'
        })
        return
      }
      
      const checkuser = await userRepository.findOneBy({phonenumber})
      
      if(checkuser){

        const payload = {
          userid: checkuser?.userid ,
          phonenumber: checkuser?.phonenumber
        }

        const username = await userRepository.find({
          where :{phonenumber: phonenumber},
          select : ['username']
        })
   
        const token = generateToken(payload)
   
        return res.status(500).json({
          status: 1,
          message: "Login Sucessfull",
          token: token,
          username:username
        })
      }else{
        res.status(500).json({
          status: 0,
          message:'Login Failed'
        })
      }

     }catch(error){
      console.log("we got error: ", error)
     }
};
  
export { signupHandler, loginHandler};
  