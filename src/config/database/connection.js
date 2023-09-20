import mongoose from "mongoose";

export const connection = async () =>{
    try {
        const URI_DB = process.env.MONGO_URI
    
        mongoose.connect("mongodb+srv://itsrustydev:JavaScript2003@club-developers.otp8hdi.mongodb.net/",{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        mongoose.connection.on("connected", ()=>{
            console.log("connection sucessfully!".blue)
        })

        mongoose.connection.on("error", ()=>{
            console.log("connection error".red)
        })

    } catch (error) {
        throw new Error(error)
    }
}

// actualizacion del dia, ptm tio