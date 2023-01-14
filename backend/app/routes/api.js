if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const router = express.Router();
const productsActions = require("../actions/api/productsActions");
const usersActions = require("../actions/api/usersActions");
const cors = require("cors");
const passport = require("passport");
const flash = require("express-flash");
const session = require("express-session");

const initializePassport = require("../../passport-config");
initializePassport(passport);

router.use(cors());
router.use(flash());
router.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);
router.use(passport.initialize());
router.use(passport.session());

router.get("/products", productsActions.getAllProducts);
router.get("/products/:id", productsActions.getProduct);
router.post("/products", productsActions.saveProduct);

router.post("/users/login", usersActions.login);
router.post("/users/signup", usersActions.signup);
router.get("/users/logout", usersActions.logout);

module.exports = router;
