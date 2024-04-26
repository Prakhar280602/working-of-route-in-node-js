var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

//forntend se jo bhi send krenge backend me vo data req me aata hai....

//Backend se jo bhi send krenge frontend me vo data res me aata hai....

/* GET auth page. */
router.get('/auth', function(req, res, next) {
 // res.send("Hello from auth page");//text message->to show the text

 //res.json({sucuss:true,message:"test"});//to show json

 //res.render('auth');//we are going to load view page-frontend(ejs-html)

 res.render('auth',{
  info:"This is auth page",
  profile:{naam:"Prakhar"},
  subjects:["HTML","CSS","Js"],
 });
});

module.exports = router;
