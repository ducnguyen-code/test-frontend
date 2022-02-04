
const votemodel=require('../models/votes')
const votes={
    getallcontent:async(req,res)=>{
      
      try {
            const allvote=await votemodel.find({});

            return res.status(200).json({
                    data:allvote,
                    msg:"success"
                })
      } catch (error) {
          res.status(500).json({msg:error.message})
      }

      
        
    },
    getcontentname:async(req,res)=>{

      
        try {
            
        
            const data=req.query.data;
            console.log(data);
            const jokes=await votemodel.findOne({namejokes:data});
           
            console.log(jokes);
            console.log(req.body);
              return   res.status(200).json({
                data:jokes
            })
        } catch (error) {
            return res.status(500).json({msg:error.message})
        }
    },
    getCookie:async(req,res)=>{

        const action=req.query.action
        console.log({action});

        const cookie=req.cookies // lấy dữ liệu từ cookie về
        
        console.log({cookie});

        const index=cookie.index*1-1; // lấy  chỉ số của phần tử cần cập nhật

        console.log(index);

        const allvote=await votemodel.find({});  // lấy tất cả các phần tử

        console.log(allvote.length);

        const joke=allvote[index];// lấy ra phẩn tử cần cập nhật

        const id=joke._id // lấy id của phần tử cần cập nhật
        let votefun=joke.votesfunny*1//lấy phần tử vote fun của  server //
        let votenotfun=joke.votesnotfunny*1//lấy phần tử vote not fun của  server //
        if(action==='funny')
        {
            votefun=votefun+1;
            
        }
        else if(action==='notfunny')
        {
            votenotfun=votenotfun+1;
           
        }
        await votemodel.findByIdAndUpdate(id,{votesfunny:votefun,votesnotfunny:votenotfun});
     



       

        console.log(id);
     //   await votemodel.fin

        res.json({
            cookie
        })
    }
}
module.exports=votes;