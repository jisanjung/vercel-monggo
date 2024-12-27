const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const port = 5000;

// general middleware
app.use(express.json());
app.use(cors({ origin: "*" }));

app.get('/', (req, res) => {
    res.json({
        message: 'working'
    });
});

// db connect and start server
mongoose.connect('mongodb+srv://sandra2938:dhlarry3@orders.vak6z.mongodb.net/?retryWrites=true&w=majority&appName=orders')
.then(() => {
    // connect to db
    console.log("connected to mongodb");
    // then start server
    app.listen(port, () => console.log(`server is running on port ${port}`));
})
.catch(error => console.log(`mongodb error: ${error}`));