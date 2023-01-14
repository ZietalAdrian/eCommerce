const User = require("../../db/models/user");
const passport = require("passport");
const bcrypt = require("bcrypt");

module.exports = {
  login(req, res, next) {
    passport.authenticate("local", (err, user) => {
      if (err) throw err;
      if (!user) res.send("No user exists");
      else {
        req.logIn(user, (err) => {
          if (err) throw err;
          res.json({ user });
        });
      }
    })(req, res, next);
  },

  signup(req, res) {
    try {
      User.findOne({ name: req.body.name }, async (err, doc) => {
        if (err) throw err;
        if (doc) res.json("User already exists");
        if (!doc) {
          const hashedPassword = await bcrypt.hash(req.body.password, 10);
          const newUser = new User({
            name: req.body.name,
            password: hashedPassword,
          });
          await newUser.save();
          res.status(201).json("User created");
        }
      });
    } catch (err) {
      res.status(422).json({ message: err.message });
    }
  },

  logout(req, res) {
    req.logOut(() => {
      res.status(200).json({ message: "Successfully logged out" });
    });
  },
};
