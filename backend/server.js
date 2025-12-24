const express = require("express");
const app = express();
app.use(express.json());

app.get("/health", (req, res) => {
  res.send("Healthcare API is running");
});

app.post("/patients", (req, res) => {
  res.json({ message: "Patient Registered", data: req.body });
});

app.listen(5000, () => console.log("Backend running on port 5000"));
