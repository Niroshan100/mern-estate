import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    username :{
        type:String,
        require: true,
        unique: true,
    },
    email :{
        type:String,
        require: true,
        unique: true,
    },

    passowrd :{
        type:String,
        require: true,
       
    }

},{ timeseries:true});


const User = mongoose.model('User',userSchema);
export default User;