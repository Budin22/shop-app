import express from "express";
import {
  info,
  all,
  deleteUser,
  changePassword,
} from "../controllers/user.controller";

const router = express.Router();

router.get("/info", info);
router.get("/all", all);
router.patch("/changePassword", changePassword);
router.delete("/delete", deleteUser);

export default router;
