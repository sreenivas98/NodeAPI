//import required modules
require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const productRoute = require('./routes/productRoute');
const errorMiddleware = require('./middleware/errorMiddleware');
const cors = require('cors');

const app = express();

//allow Cross-Origin Resource Sharing
// let corsOptions = {
//     origin: [List of all the ip address for allowing the access to our API],
//     optionsSuccessStatus: 200 //Some legacy browsers (IE11, various smartTVs) choke on 204
// }
// app.use(cors(corsOptions));
app.use(cors());

//Get environment variables like DB uri, port number, etc.
const MONGO_URL=process.env.MONGO_URL;
const PORT=process.env.PORT || 3000;

//middleware 
app.use(express.json());
app.use(express.urlencoded({extended:false}));


//routes
app.use('/api/products',productRoute);

//Initial Route providing instructions
app.get('/', (req,res) => {
    return res.end("Hello there welcome to my API");
});

app.use(errorMiddleware);

mongoose.set("strictQuery", false);

// Connect to MongoDB
mongoose.connect(MONGO_URL)
.then(()=> {
    app.listen(PORT, ()=> {
        console.log(`Node API app is running on port ${PORT}`);
    });
    console.log("Connected to MongoDB");
}).catch(()=>{
    console.log("Error correcting to MongoDB");
});