const express = require("express");
const cors = require("cors");
const cookieSession = require("cookie-session");

const authRoutes = require("./authentication/router");
const stripeRoutes = require("./stripe/router")
const postnordRoutes = require("./postnord/router")

const PORT = 3000;

const app = express();

app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());

app.use(
  cookieSession({
    secret: "signkey",
    maxAge: 1000 * 60 * 60,
  })
);

app.use("/api/auth", authRoutes);
app.use("/api/stripe", stripeRoutes)
app.use("/api/postnord", postnordRoutes)

app.listen(PORT, () => console.log("Server is up"));
