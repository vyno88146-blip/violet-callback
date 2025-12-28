const express = require("express");
const app = express();

app.use(express.json());

// ROUTE ROOT (WAJIB ADA)
app.get("/", (req, res) => {
  res.send("Violet Callback Server AKTIF ✅");
  });

  // ROUTE CALLBACK
  app.post("/callback", (req, res) => {
    console.log("CALLBACK MASUK:");
      console.log(req.body);
        res.json({ status: "ok" });
        });

        // PORT (WAJIB UNTUK RAILWAY)
        const PORT = process.env.PORT || 3000;

        app.listen(PORT, () => {
          console.log("Server jalan di port " + PORT);
          });