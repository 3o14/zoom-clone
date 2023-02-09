import express from "express";

const app = express();

app.set("view engine", "pug"); // viewengine을 pug로 설정
app.set("views", __dirname + "/views"); // express로 template 위치 지정
app.use("/public", express.static(__dirname + "/public")); // public url로 유저에게 파일 제공
app.get("/", (req, res) => res.render("home"));

const handleListen = () => console.log(`Listening on http://localhost:3000`);
app.listen(3000, handleListen);