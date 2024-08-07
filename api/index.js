import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
import userRouter from'./routes/user.route.js';

const app =express();
mongoose.connect(process.env.MONGO)
.then(()=> {
    console.log('connected to MongoDB!')
})

.catch((err) => {
    console.log(err);

});




app.get('/api/user/test', (req, res) => {
    res.send('api router is working');
  });
  



 
  
app.listen(3000, () => {

    console.log('Server is running on port 3000!');
}

);

//api router
app.use("/app/user",userRouter);