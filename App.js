const express = require("express");
const axios = require("axios");
const path = require("path");
const dotenv = require("dotenv");
apiKey="fdb0ef8007ca4333b402eabe072b99fd"

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public")));

app.get("/API", async (req, res) => {
  try {
    const { q, pagesize, page } = req.query;

    const url = `https://newsapi.org/v2/everything?q=${q}&apiKey=fdb0ef8007ca4333b402eabe072b99fd&pagesize=${pagesize}&page=${page}`;
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("//", (req, res) => {
  res.sendFile(path.join(__dirname,"index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
