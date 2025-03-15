
// this are the required modules
// express module is used to create the server
const express = require('express');

// codeDribble is the server
const codeDribble = express();

// codeDribbleRoutes is the routes
const codeDribbleRoutes = require("./routes/index");

// environmentFile is used to load the environment variables
const environmentFile = require("dotenv");

const cors = require("cors");

codeDribble.use(cors({origin:"*"}));

codeDribble.use(express.urlencoded({extended:false}));
codeDribble.use(express.json());


// this is the configuration of the environment variables
environmentFile.config(
    {
        path:"./environments/.env"
    }
);

// this is the configuration of the server
codeDribble.use(express.json());

// this is the configuration of the routes
codeDribble.use("/",codeDribbleRoutes);



// this is the configuration of the server to listen to the port
codeDribble.listen(process.env.PORT,()=>{
    console.log("codeDribble API is working");
})
