import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import bcrypt from "bcryptjs";
import User from "../models/user.js";  

passport.use(new LocalStrategy(
    function(username, password, done) {
        try {
            const user = await User.findOne({username});
            if(!user) {
                return done(null, false, {message: "Incorrect username"});
            }
        } catch (error) {
            
        }

        User.findOne({ username: username }, async function (err, user) {
            if (err) { return done(err); }
            if (!user) { return done(null, false, { message: 'Incorrect username.' }); }
            if (!user.verifyPassword(password)) { return done(null, false, { message: 'Incorrect password.' }); }
            return done(null, user);
        }); 