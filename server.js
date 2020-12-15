const express = require("express");
const exphbs = require("express-handlebars");
const handlebars = require("handlebars");
const {
  allowInsecurePrototypeAccess,
} = require("@handlebars/allow-prototype-access");
const db = require("./models");
const app = express();

const playerController = require("./controllers/playerController");
const userController = require("./controllers/userController");
const billController = require("./controllers/billController");
const interactionController = require("./controllers/interactionController")

const PORT = process.env.PORT || 8080;

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

// ROUTES

// Views Routes
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/legislation", (req, res) => {
  res.render("legislation");
});

app.use(playerController);
app.use(userController);
app.use(billController);
app.use(interactionController)

// API Routes
app.get("/api/config", (req, res) => {
  res.json({
    success: true,
  });
});

app.post("/api/test", (req, res) => {
  console.log(req.body);
});
// db.sequelize.sync({ force: true }).then(() => {
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`App is running on http://localhost:${PORT}`);
  });
});
