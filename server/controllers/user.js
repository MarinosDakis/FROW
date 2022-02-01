import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.js";

export const signin = async (req, res) => {

    // we want to get email and password
    const { email, password } = req.body;

    try {

    } catch (error) {
        res.status(500).json({ message: "Something went wrong. " });
    }

}

export const signup = async (req, res) => {

    try {

    } catch (error) {
        res.status(500).json({ message: "Something went wrong. " });
    }

}
