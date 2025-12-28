const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Violet Callback Server Aktif");
  });

  app.post("/callback", (req, res) => {
    console.log("CALLBACK MASUK:");
      console.log(req.body);

        res.json({ status: "ok" });
        });

        const PORT = process.env.PORT || 3000;
        const express = require("express");
        const app = express();

        app.use(express.json());

        // ROUTE ROOT (WAJIB)
        app.get("/", (req, res) => {
          res.send("Callback Violet Media AKTIF ✅");
          });

          // contoh callback (opsional)
          app.post("/callback", (req, res) => {
            console.log(req.body);
              res.json({ status: "ok" });
              });

              const PORT = process.env.PORT || 3000;
              app.listen(PORT, () => {
                console.log("Server jalan di port " + PORT);
                });
        app.listen(PORT, () => {
          console.log("Server jalan di port " + PORT);
          });