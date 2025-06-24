import mongoose from "mongoose" 
import dotenv from "dotenv"

dotenv.config()

const ConnectDB = async () =>{
    try {
      const Connection =  await mongoose.connect(process.env.MONGODB_URL)
      res.send(200).json({success:true,message:`Connection Of Mongodb : ${Connection}`})
    } catch (error) {
       console.log(`MongoDB is not connect in mongodb.js`,error)
       res.status(500).json({success:false , message:"Mongodb is not connected"})
    }
}

export default ConnectDB;