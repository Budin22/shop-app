import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import session from "express-session";
import passport from "passport";
import initializePassport from "./config/passport";
import userRouter from "./routers/user.router";
// import flash from "express-flash";

dotenv.config({ path: ".env" });
const app = express();
// app.set("view-engine", "ejs");
initializePassport();

app.set("port", process.env.PORT);

app.use(cors());
// app.use(apiContentType);
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.use(cookieParser());
// app.use(flash());
app.use(passport.initialize());
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.session());

app.use("/user", userRouter);
app.post(
  "/user/login",
  passport.authenticate("local", (req, res) => {
    res.json({ isAuth: req.isAuthenticated() });
  })
);

export default app;
