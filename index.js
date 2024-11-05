import express from "express";
import cors from "cors";
import { access, constants } from "node:fs/promises";
import {isbot} from "isbot";
import path from "node:path";
const app = express();
const distDir = path.join(import.meta.dirname, "dist");
const assetsDir = path.join(distDir, "assets");
app.use(cors());
app.get((req, res, next) => {
  if (isbot()) res.sendStatus(403);
  else next();
});
app.get("/", (_, res) => {
  res.header("Cache-Control", "private, no-cache, no-store, must-revalidate");
  res.header("Expires", "-1");
  res.header("Pragma", "no-cache");
  res.sendFile(`${distDir}/index.html`);
});
app.get("/assets/:file", async (req, res) => {
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
app.listen(process.env.port??8080, () => {
  console.log("server listening on port 8080");
});
