import { NextFunction, Request, Response } from "express";
import JWT from "jsonwebtoken";
import bcrypt from "bcrypt";

import User from "../models/User";

export const signup = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password } = req.body;

    const isUser = await User.findOne({ email });
    if (isUser) {
      return res.json({ msg: "Email is exist" });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const user = await User.create({ email, password: hashPassword });

    res.status(200).json({ user });
  } catch (err) {
    res.status(420).json({ msg: err });
  }
};

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ msg: "Email does not exist" });
    }

    if (await bcrypt.compare(password, user.password)) {
      const token = JWT.sign(
        { email, id: user._id },
        process.env.JWT_SECRET as string,
        {
          expiresIn: 360000,
        }
      );
      return res.status(200).json({ email, token });
    }
  } catch (err) {
    console.log(err);
    next(err);
  }
};

export const info = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (req.isAuthenticated()) {
      return res.json({ msg: "I am in" });
    }

    res.json({ msg: "I am out" });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

export const all = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (req.isAuthenticated()) {
      const allUsers = await User.find();
      return res.json({ users: allUsers });
    }

    res.json({ msg: "You need auth" });
  } catch (err) {
    console.log(err);
    next(err);
  }
};
