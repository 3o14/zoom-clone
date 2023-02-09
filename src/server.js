import http from "http";
import WebSocket from "ws";
import express from "express";

const app = express();

app.set("view engine", "pug"); // viewengine을 pug로 설정
app.set("views", __dirname + "/views"); // express로 template 위치 지정
app.use("/public", express.static(__dirname + "/public")); // public url로 유저에게 파일 제공
app.get("/", (_, res) => res.render("home"));
app.get("/*", (_, res) => res.redirect("/"));

const handleListen = () => console.log(`Listening on http://localhost:3000`);

const server = http.createServer(app);
const wss = new WebSocket.Server({server}); 
// wss(Web Socket Serveer)

// http 서버 위에 webSocket 서버를 만듬
server.listen(3000, handleListen);