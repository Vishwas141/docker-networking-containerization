const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const StudentRoute = require("./routes/StudentRoute");
const PORT = 5000;

//to avoid cors error
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
}))

app.use(express.json());
app.use("/api", StudentRoute);


// mongodb://mongodb:27017/yourDatabaseName
// database connection
// mongodb://mongo:27017/studentdb

mongoose.connect("mongodb://mongodb:27017/studentDb").then(() =>
{
    console.log("Connected to database");
}).catch((err) =>
{
    console.log(err);
})


app.get("/", (req, res) =>
{
    console.log("Hello from server");
})
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
 })
