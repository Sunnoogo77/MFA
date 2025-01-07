import bcrypt from "bcryptjs";
import speakeasy from "speakeasy";
import QRCode from "qrcode";
import jwt from "jsonwebtoken";
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
        res.status(201).json({message: "User registered successfully"});
    } catch (error) {
        res.status(500).json({error: "Error registering user", message: error.message});  
    }
};

export const login = async (req, res) => {
    console.log("The authenticate user is  : ", req.user);
    res.status(200).json({
        message: "User logged in successfully",
        username: req.user.username,
        isMfaActive: req.user.isMfaActive,
    });
};


export const authStatus = async (req, res) => {
    if(req.user) {
        res.status(200).json({
            message: "User logged in successfully",
            username: req.user.username,
            isMfaActive: req.user.isMfaActive,
        });
    }else {
        res.status(401).json({message: "Unauthorized user"});
    }
};

export const logout = async (req, res) => {
    if(!req.user) res.status(401).json({message: "Unauthorized user"});
    req.logout((err) => {
        if (err) return res.status(400).json({message: "User not logged in"});
        res.status(200).json({message: "User logged out successfully"});
    });
};

export const setup2FA = async (req, res) => {
    try {
        console.log("The request User is : ", req.user);
        const user = req.user;
        var secret = speakeasy.generateSecret();
        console.log("The secret is : ", secret);
        user.twoFactorSecret = secret.base32;
        user.isMfaActive = true;
        await user.save();
        const url = speakeasy.otpauthURL({
            secret: secret.base32,
            label: `${req.user.username}`,
            issuer: "2FA Demo",
        });
        const qrImageUrl = await QRCode.toDataURL(url);
        res.status(200).json({message: "2FA setup successfully", qrImageUrl});
        // if(user.isMfaActive) {
        //     return res.status(400).json({message: "2FA is already active"});
        // }else {
        //     //Generate 2FA secret
        //     const {base32: secret} = speakeasy.generateSecret({
        //         name: user.username,
        //     });
        //     user.isMfaActive = true;
        //     user.twoFactorSecret = secret;
        //     await user.save();
        //     res.status(200).json({message: "2FA setup successfully", secret});
        // }
    } catch (error) {
        res.status(401).json({error: "Error setting up 2FA", message: error.message});
    }
};

export const verify2FA = async (req, res) => {};

export const reset2FA = async (req, res) => {};
