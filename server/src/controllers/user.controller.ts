import { Request, Response } from "express";
import bcrypt from "bcrypt";

import User from "../models/User";
import { errorHandler } from "../utils/errorHandler";

export const info = async (req: Request, res: Response) => {
  try {
    res.json({ msg: req.user });
  } catch (err) {
    errorHandler(res, err);
  }
};

export const all = async (req: Request, res: Response) => {
  try {
    const allUsers = await User.find();
    res.json({ users: allUsers });
  } catch (err) {
    errorHandler(res, err);
  }
};

export const changePassword = async (req: Request, res: Response) => {
  try {
    const { password, id } = req.body;

    const hashPassword = await bcrypt.hash(password, 10);

    const user = await User.findByIdAndUpdate(
      id,
      { password: hashPassword },
      { new: true }
    );
    if (user) {
      res.status(200).json({ user });
    }
  } catch (err) {
    errorHandler(res, err);
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.body;
    const isDelete = await User.findByIdAndDelete(id);
    res.json(isDelete);
  } catch (err) {
    errorHandler(res, err);
  }
};
