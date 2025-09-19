const express = require("express");
const path = require('path');
const cookieParser= require("cookie-parser");

const {connectToMongoDB} = require("./connect");
const URL = require('./models/url');

const staticRoute = require("./routes/staticRouter");
const UserRoute = require("./routes/user")
const User = require("./models/user");
const urlRoute= require("./routes/url");
const {restricTologgedinUserOnly , checkAuth }= require("./middleware/auth");

const app = express();
const PORT = 8001;


connectToMongoDB('mongodb://localhost:27017/short-url').then(()=>
    console.log("mongodb connected")
);

app.set("view engine","ejs");
app.set("views",path.resolve("./views"));
app.use(express.json());
app.use(cookieParser());

// app.use((req,res)=>{});

app.use(express.urlencoded({extended:false}));

app.use("/url",restricTologgedinUserOnly,urlRoute);

app.use("/user",UserRoute);
app.use("/",checkAuth,staticRoute);


// app.use("/new", async(req,res)=>{
//     const allUrl= await URL.find({});
//     return res.render("home",{
//         urls : allUrl,
//     }); // directly use for homepage
// });


app.get('/:shortId',async(req,res)=>{
    const shortId = req.params.shortId;
  const entry= await URL.findOneAndUpdate(
    {
        shortId,
    },
    {$push:{
        visitHistory: {
           timestamp: Date.now(),
        },
    },
    }

    );
   
    
    res.redirect(entry.redirectUrl);

});

app.listen(PORT, ()=>{
    console.log(`server started at port ${PORT}`)
});