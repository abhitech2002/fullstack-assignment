const express = require('express');
const dotenv = require('dotenv')
const connection = require('./connection.js')
const cardRoute = require('./routes/index.js')
const cors = require('cors')

dotenv.config()
const app = express();

app.use(express.json());
app.use(cors())

app.get('/ping', (req, res) => {
    res.send('Server is running');
});

app.use('/api/v1/card', cardRoute)

port = process.env.PORT

connection.then(() => {
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
}).catch((error) => {
    console.error("Failed to connect to MongoDB:", error);
});

