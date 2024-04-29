var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index');
});

//forntend se jo bhi send krenge backend me vo data req me aata hai....

//Backend se jo bhi send krenge frontend me vo data res me aata hai....

/* GET auth page. */
router.get('/auth', function (req, res, next) {
  // res.send("Hello from auth page");//text message->to show the text

  //res.json({sucuss:true,message:"test"});//to show json

  //res.render('auth');//we are going to load view page-frontend(ejs-html)

  res.render('auth', {
    info: "This is auth page",
    profile: { naam: "Prakhar" },
    subjects: ["HTML", "CSS", "Js"],

    users: [{ id: 1, name: "Prakhar", email: "prakhar@gmail.com" },
    { id: 2, name: "Kartik", email: "kartik@gmail.com" },
    { id: 3, name: "Hardik", email: "hardik@gmail.com" },
    { id: 4, name: "Akshay", email: "akshay@gmail.com" },
  ],

  });
});

/* GET Read page. */
router.get('/read/:id', function (req, res, next) {
  res.send("<h1>This is user read page </h1>");
});


/* GET update page. */
router.get('/update/:id', function (req, res, next) {
  res.send("<h1>This is user update page </h1>");
});


/* GET Delete page. */
router.get('/delete/:id', function (req, res, next) {
  res.send("<h1>This is user delete page </h1>");
});

module.exports = router;
