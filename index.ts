import express from "express";
const app = express();
const bodyParser = require('body-parser');
const auth_routes = require('./routes/authRoute')
const cors = require('cors');
import { AppDataSource } from "./db";

const PORT = process.env.PORT

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!");
        // Start the server after database initialization
        app.listen(8000, () => {
            console.log("Server is running on port ",8000
                
            );
        });
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err);
    });

app.use(cors({origin: 'http://localhost:3000'}))

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/testing',auth_routes)

app.listen(PORT,()=>{
    console.log("listen to",PORT)
})