const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const job_route = require('./routes/job_routes');
const user_route = require('./routes/user_routes');
const company_route = require('./routes/company_routes');
const category_route = require('./routes/category_routes');
const candidateprofile_route =require('./routes/candidate_route');
const testimonal_route =require('./routes/testimonal_route');

require('dotenv').config();

const app = express();  

app.use(cors());

//middleware
app.use(express.json());

//middleware to identify which url hit
app.use((req,res,next)=>{
    console.log("HTTP method = " + req.method +" , URL - " +req.url);
    next();
})

app.use("/api/jobs",job_route);
app.use("/api/user",user_route);
app.use("/api/company",company_route);
app.use("/api/category",category_route);
app.use("/api/candidate",candidateprofile_route);

//just for revies
app.use("/api/test",testimonal_route);



mongoose.connect(process.env.MONGODB_URL)
.then(() => app.listen(process.env.PORT))
.then(() =>
    console.log("connected to mongodb and listening to port 5000")
)
.catch((err) => console.log(err))