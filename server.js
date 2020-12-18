const express = require("express");
const exphbs = require("express-handlebars");
var session = require("express-session");
const handlebars = require("handlebars");
const passport = require("./config/passport");
const {
  allowInsecurePrototypeAccess,
} = require("@handlebars/allow-prototype-access");
const db = require("./models");
const app = express();

const viewController = require("./controllers/viewController")
const userController = require("./controllers/userController");
const billController = require("./controllers/billController");
const interactionController = require("./controllers/interactionController")

const PORT = process.env.PORT || 8080;

// Passport Middleware 
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// MIDDLEWARE
// Handle POST body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory to be served
app.use(express.static("public"));

// Configure express-handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main",
    handlebars: allowInsecurePrototypeAccess(handlebars),
  })
);
app.set("view engine", "handlebars");



app.use(userController);
app.use(billController);
app.use(interactionController);
app.use(viewController);


// db.sequelize.sync({ force: true }).then(() => {
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`App is running on http://localhost:${PORT}`);
  });
});
