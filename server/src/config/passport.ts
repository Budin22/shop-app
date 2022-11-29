import passport from "passport";
import passportLocal from "passport-local";
import User, { TUser } from "../models/User";
import bcrypt from "bcrypt";

const LocalStrategy = passportLocal.Strategy;

const initialize = () => {
  passport.use(
    new LocalStrategy(
      { usernameField: "email" },
      async (email, password, done) => {
        try {
          const user = await User.findOne({ email: email });
          if (!user) {
            return done(null, false, {
              message: `Email ${email} not found`,
            });
          }
          if (await bcrypt.compare(password, user.password)) {
            return done(null, user);
          }
          return done(null, false, { message: "Invalid password" });
        } catch (err) {
          done(err);
        }
      }
    )
  );

  passport.serializeUser<any, any>((req, user, done) => {
    done(null, user);
  });

  passport.deserializeUser((user: TUser, done) => {
    const fetchUser = (id: string) => User.findById(id);
    fetchUser(user._id).then((user) => {
      return done(null, user);
    });
  });
};

export default initialize;
