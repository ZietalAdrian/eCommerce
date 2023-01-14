const bcrypt = require("bcrypt");
const User = require("./app/db/models/user");

const LocalStrategy = require("passport-local").Strategy;

const initialize = (passport) => {
  passport.use(
    new LocalStrategy({ usernameField: "name" }, (name, password, done) => {
      User.findOne({ name: name }, (err, user) => {
        if (err) throw err;
        if (!user) return done(null, false);
        bcrypt.compare(password, user.password, (err, result) => {
          if (err) throw err;
          if (result === true) {
            return done(null, user);
          } else {
            return done(null, false);
          }
        });
      });
    })
  );
  passport.serializeUser((user, cb) => cb(null, user.id));
  passport.deserializeUser((id, cb) => {
    User.findOne({ _id: id }, (err, user) => {
      cb(err, user);
    });
  });
};

module.exports = initialize;