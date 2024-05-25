import mongoose from "mongoose";
const  dbCon = async ()=>{
    //connect to MongoDB
try{
    await mongoose.connect(process.env.MongoDBURI);
    console.log("Connected to mongoDB !!");

}catch(error){
    console.log("Error : ", error);
}
}
export default dbCon;