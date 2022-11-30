import passport from "passport";
import passportJwt from "passport-jwt";
import User from "../models/User";

const JwtStrategy = passportJwt.Strategy;
const ExtractJwt = passportJwt.ExtractJwt;

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: "21d2fg1dfg1d1grr4utyiuty51ws3df4sd4gfsdf-sdfs5e5e",
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
