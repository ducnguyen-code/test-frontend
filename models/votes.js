const mongoose=require('mongoose');


const votesSchema=new mongoose.Schema({
    namejokes:{type:String,required:true},// người votes
    content:{type:String},
    votesfunny:{type:Number},// số lượng votes,
    votesnotfunny:{type:Number}
    
})

module.exports=mongoose.model('votes',votesSchema);