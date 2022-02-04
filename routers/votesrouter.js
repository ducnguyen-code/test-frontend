const express=require('express')
const voteCtrl=require('../controllers/votes')
const votesRoute=express.Router();

votesRoute.get('/votes/findname',voteCtrl.getcontentname);
votesRoute.get('/votes',voteCtrl.getallcontent);
votesRoute.get('/getcookie',voteCtrl.getCookie);

module.exports=votesRoute;