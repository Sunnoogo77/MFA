import bcrypt from "bcrypt";
import User from "../models/user.js";


export const register = async (req, res) => {
    try {
        const {username, password} = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            username,
            password: hashedPassword, 
            isMfaActive: false,
        });
        console.log("New User : ", newUser);
        await newUser.save();
    } catch (error) {
        res.status(500).json({error: "Error registering user", message: error.message});  
    }
};

export const login = async (req, res) => {
    try {
        const {username, password} = req.body;
        const user = await User.findOne({
            username,
        });
        if (!user) {
            res.status(404).json({error: "User not found"});
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            res.status(401).json({error: "Invalid password"});
        }
        req.session.user = user;
        res.status(200).json({message: "Login successful", user});
};

export const authStatus = async (req, res) => {};

export const logout = async (req, res) => {};

export const setup2FA = async (req, res) => {};

export const verify2FA = async (req, res) => {};

export const reset2FA = async (req, res) => {};
