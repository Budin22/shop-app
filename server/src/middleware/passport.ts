import passport from "passport";
import passportJwt from "passport-jwt";
import User from "../models/User";
import { jwtSecret } from "../config/keys";

const JwtStrategy = passportJwt.Strategy;
const ExtractJwt = passportJwt.ExtractJwt;

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: jwtSecret,
};

const initialize = () => {
  passport.use(
    new JwtStrategy(options, async (payload, done) => {
      try {
        const user = await User.findById(payload.id).select("email id");

        if (user) {
          return done(null, user);
        } else {
          done(null, false);
        }
      } catch (err) {
        done(err);
      }
    })
  );
};

export default initialize;
