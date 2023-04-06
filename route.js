require('dotenv').config()
const express = require('express');
const { addQuestion, getAllQuestions, getAnswer, quizDetails } = require('./quizMethods');
const { model } = require('mongoose');
const quizSchema = require('./models/quizSchema');
const route = express.Router()

const quiz = {
    html: "Html quizze",
    python: "Python quizze",
    javascript: "Javascript quizze",
    reactjs: "Reactjs quizze",
    nodejs: "Nodejs quizze",
    sql: "Sql quizze"
}

const generateModel = (req, res, next) => {
    try {
        const { collectionName } = req.params
        req.model = model(quiz[collectionName], quizSchema);
        next()
    }
    catch (err) {
        res.send(err.message)
    }
}

//check api key
const haveApiKey = (request, response, next) => {
    const apiKey = request.headers["x-api-key"];
    if (apiKey === undefined) {
        response.status(401)
        response.send({ msg: "Unauthorized Api key is missing!" })
    }
    else if (apiKey === process.env.API_KEY) {
        next()
    }
    else {
        response.status(400)
        response.send({ msg: "Invalid Api Key!" });
    }
}

//check origin
const origins = ['https://nagarjuna-quiz-app.netlify.app']
const isThisOrigin = (request, response, next) => {
    const { origin } = request.headers;
    // if (origins.indexOf(origin) !== -1) {
    //     next()
    // }
    // else {
    //     response.status(400)
    //     response.send({ msg: " This Api has Restricted by Owner!" })
    // }
    next();
}

route.get('/', quizDetails);

route.get('/:collectionName/', haveApiKey, generateModel, getAllQuestions);

route.get('/:collectionName/:questionId/answer', haveApiKey, generateModel, getAnswer)

route.post('/:collectionName/add-question', haveApiKey, generateModel, addQuestion);

module.exports = { haveApiKey, route }