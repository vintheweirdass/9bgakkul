import express from "express";
import cors from "cors";
import { access, constants } from "node:fs/promises";
import {isbot} from "isbot";
import {distDir,assetsDir} from "./api.config.js"
import path from "node:path";
const app = express();
// const port = parseInt(process.env.PORT) || process.argv[3] || 8080;
app.use(cors());
const bot = (req, res, next) => {
  if (isbot()) res.sendStatus(403);
  else next();
}
const sendIndex =  (req, res, next)=>{
  res.header("Cache-Control", "private, no-cache, no-store, must-revalidate");
  res.header("Expires", "-1");
  res.header("Pragma", "no-cache");
  res.sendFile(`${distDir}/index.html`);
}
app.get("/", bot, sendIndex)
app.get("/friends", bot, sendIndex)
app.get("/friends/:name", bot, sendIndex)
app.get("/assets/:file", bot, async (req, res) => {
  try {
    access(
      `${assetsDir}/${req.params.file}`,
      constants.R_OK | constants.W_OK
    ).then(() => {});
  } catch {
    return res.sendStatus(404);
  }
  res.sendFile(`${assetsDir}/${req.params.file}`);
});
console.log("test")
app.listen(5000, () => {
  console.log("Running on port 5000.");
});
//app.listen(port, '0.0.0.0');
