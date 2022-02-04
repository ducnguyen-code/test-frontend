

const express=require('express');

const cookieParser=require('cookie-parser')

const connectDB=require('./config/database')

const app=express();

const bodyparser=require('body-parser')

const indexrouter=require('./routers/indexRoute')
//const voteModel=require('./models/votes')


//const db=require('./db')
connectDB();
//middlewware
app.use(cookieParser())
app.use(express.json())
app.use(cookieParser())


app.use(express.urlencoded({extended:false}));
// voteModel.create({
//     namejokes:"jokes 4",
//     votes:10
// })

// const dataImport=async()=>{
//     try {
//         await voteModel.deleteMany({});
       
//         await voteModel.insertMany(db)
       
//         console.log("Data import Succed");
//     } catch (error) {
//         console.log("Data import Eror");
//         process.exit(1);
//     }
// }
// dataImport();

//router

app.use('/api/v1',indexrouter)
app.use('/',()=>{
    res.json({
        msg:"Nguyễn Hồng Đức "
    })
})


const PORT=5000;


app.listen(PORT,()=>{
    console.log(`Server run ning on port ${PORT}`);
})