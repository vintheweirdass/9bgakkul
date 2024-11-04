import express from "express"
import cors from 'cors';
import path from "node:path";
const app = express()
app.use(cors())
app.use((req, res, next) => {
    if (/(.ico|.js|.css|.jpg|.png|.map)$/i.test(req.path)) {
        next();
    } else {
        res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
        res.header('Expires', '-1');
        res.header('Pragma', 'no-cache');
        res.sendFile(path.join(import.meta.dirname, 'dist', 'index.html'));
    }
});
app.listen(8080, () => {
    console.log('server listening on port 8080')
})