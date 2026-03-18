const express = require('express');

const app = express();

app.use(express.json()); // middleware that allow reading of data from req.body()

/* require all routes here*/
const authRouter = require('./routes/auth.routes')

/* using all routes here */
app.use("/api/auth", authRouter)



module.exports = app;