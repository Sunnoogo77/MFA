import express, { json, urlencoded } from 'express';
import session from 'express-session';
import passport from 'passport';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();

//Middlewares
const corsOptions = {
    //origin: process.env.FRONTEND_URL,
    origin: 'http://localhost:3001',
    credentials: true,
    optionsSuccessStatus: 200
};
app.use(cors(corsOptions));
app.use(json({limit: "100mb"}));
app.use(urlencoded({limit: "100mb", extended: true}));
app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
        cookie:{
            maxAge: 3600000,
        }
    })
);
app.use(passport.initialize());
app.use(passport.session());

// Routes

//Listen app
const PORT = process.env.PORT || 7002;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});