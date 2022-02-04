
const mongoose=require('mongoose')

const connectDB=async()=>{
    try {
        await mongoose.connect('mongodb+srv://hongduc:12345@cluster0.yyh3q.mongodb.net/test-frontend?retryWrites=true&w=majority',{
          //  useCreateIndex:true,
            useUnifiedTopology:true,
             //useFindAndModify:true,
             useNewUrlParser:true
           
        });
        console.log("connect db success");
    } catch (error) {
        console.log("error connect DB");
    }
}
module.exports=connectDB