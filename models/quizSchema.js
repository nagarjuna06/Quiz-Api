const { Schema, model } = require("mongoose");

const quizSchema = Schema({
    question: {
        type: String,
        required: true
    },
    code: {
        type: String,
        default: null,
    },
    options: {
        type: String,
        required: true
    },
    answer: {
        type: String,
        required: true
    },
    explanation: {
        type: String,
        default: null
    },
    level: {
        type: String,
        required: true
    }
});
// const Quiz = model('myModel', quizSchema);
// module.exports = { quizSchema, Quiz }

module.exports = quizSchema