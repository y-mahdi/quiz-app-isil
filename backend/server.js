const app=require('./app');
const mongoose=require('mongoose');
require('dotenv').config();


//MongoDB Connection
mongoose.connect(process.env.DBKEY,()=>{
    console.log("connected")
})

app.listen(process.env.PORT,()=>{
    console.log(`Server is Listening on ${process.env.PORT}`);
})