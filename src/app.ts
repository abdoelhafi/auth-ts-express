import express from 'express';
require("dotenv").config();
import redis from "redis";
import session from "express-session"
import connectRedis from "connect-redis"

import router from './routes/auth';

const app = express(); 
const port = parseInt(process.env.APP_PORT);

app.use(express.json());
app.use(express.urlencoded());

// when using nginx uncomment the folowing line
// app.set('trust porxy',1);


const redisClient = redis.createClient({
    host: process.env.REDIS_HOSTNAME,
    port: parseInt(process.env.REDIS_PORT),
    password: process.env.REDIS_PASSWORD
});

const redisStore = connectRedis(session);

// session midlleware
app.use(session({
    store: new redisStore({client:redisClient}),
    secret: process.env.SESSION_SECRET,
    resave:false,
    saveUninitialized:true,
    cookie:{
        secure:false,
        httpOnly: false,
        maxAge: 1000  * 60 * 60 * 2,
    }
}));

redisClient.on("error", () => {
    console.log("Cannot connect to redis instance");
});

redisClient.on("connect", () => {
    console.log("Connected to our redis instance!");
});
app.use('/auth', router);

app.listen(port, () => {
  console.log(`server is running on port ${port}.`);
});