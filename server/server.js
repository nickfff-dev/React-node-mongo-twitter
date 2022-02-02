require("dotenv").config();

const express = require("express");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const passport = require("passport");
const cors = require("cors");
const authRoutes = require("./routes/auth");
const { MONGO_URL, CLIENT_URL } = require("./config/globals");
const cookieParser = require("cookie-parser");
const path = require("path");

require("./config/passport");
require("./config/database");

const app = express();

const port = process.env.PORT || 4000;

app.use('/client', express.static(__dirname + '/client'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// load session data and make it available at `req.session`
app.use(
  session({
    // name: "test",
    secret: process.env.COOKIE_KEY,
    resave: true,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: MONGO_URL,
    }),
    cookie: { maxAge: 1000 * 60 * 60 * 24 * 90 },
  })
);

// initialize passport and authenticate the request based on session
// data.
app.use(passport.initialize());
// deserialize cookie from the browser
app.use(passport.session());

app.use(
  cors({
    origin: CLIENT_URL,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true, // allow session cookie from browser to pass through
  })
);

// set up routes
app.use("/auth", authRoutes);

app.listen(port, () => console.log(`Server is running on port ${port}!`));
