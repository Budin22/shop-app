import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import passport from "passport";
import initializePassport from "./config/passport";
import userRouter from "./routers/user.router";
import authRouter from "./routers/auth.router";

dotenv.config({ path: ".env" });
const app = express();
initializePassport();

app.set("port", process.env.PORT);

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(passport.initialize());

app.use("/user", passport.authenticate("jwt", { session: false }), userRouter);
app.use("/auth", authRouter);
export default app;
