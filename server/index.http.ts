import express from "express";
import cookieparser from "cookie-parser";

const app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cookieparser());

app.get("/", (req, res) => {
  console.log(req);
  console.log(req.cookies);
  console.log("======");
  res.cookie("cookiename", "hellowordcookie", {
    secure: false,
    sameSite: "none",
  });
  res.send({ message: "Hello GET Request" });
});

app.post("/", (req, res) => {
  res.cookie("cookiename", "hellowordcookie");
  res.send({ message: "Hello POST Request" });
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
