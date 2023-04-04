require('dotenv').config()
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const quizRoute = require('./route');
const app = express()
app.use(express.json())
app.use(cors())
const port = process.env.PORT || 5000;
mongoose.connect(process.env.DB_URL).then(() => console.log("DB Connected!")).catch(err => console.log(err))
app.listen(port, () => console.log('Server is running! at port  ' + port))

app.get('/', quizRoute.haveApiKey, quizRoute.isThisOrigin, async (req, res) => {
    res.send("welcome quiz api")
})

app.use('/quiz', quizRoute.route)