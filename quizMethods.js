const questions = require('./data');
let count = 0;
const addQuestion = async (req, res) => {
    try {
        const Quiz = req.model
        const newData = new Quiz(req.body)
        await newData.save()
        res.send('question added successfully!')
    }
    catch (err) {
        res.send(err.message);
    }
}

const shuffledArray = array => {
    return array.sort((a, b) => 0.5 - Math.random());
}
const calculateTime = (level, no) => {
    if (level === 'easy') {
        if (no === 5) return 3
        else if (no === 10) return 8
        else if (no === 15) return 12
        else if (no === 20) return 15
    }
    else if (level = "medium") {
        if (no === 5) return 5
        else if (no === 10) return 10
        else if (no === 15) return 15
        else if (no === 20) return 20
    }
    else {
        if (no === 5) return 8
        else if (no === 10) return 12
        else if (no === 15) return 20
        else if (no === 20) return 30
    }
}

const calculateMarks = (level) => {
    if (level === 'easy') return 2
    else if (level === 'medium') return 3
    else return 5
}

const calculateSkip = (level) => {
    if (level === 'easy') return 10
    else if (level === 'medium') return 15
    else return 20
}

const getAllQuestions = async (req, res) => {
    const { level = "easy", no = 10 } = req.query

    try {
        const Quiz = req.model
        let allQuestions = await Quiz.find({ level })
        allQuestions = shuffledArray(allQuestions).slice(0, parseInt(no))
        const data = allQuestions.map(each => ({
            questionId: each._id,
            question: each.question,
            code: each.code !== null ? JSON.parse(each.code) : each.code,
            options: JSON.parse(each.options),
        }))
        const time = calculateTime(level, parseInt(no));
        const mark = calculateMarks(level)
        const skip = calculateSkip(level)
        res.send({ time, mark, skip, data: shuffledArray(data) })
    }
    catch (err) {
        res.send(err.message);
    }
}

const getAnswer = async (req, res) => {
    const { questionId } = req.params
    try {
        const Quiz = req.model
        const Answer = await Quiz.find({ _id: questionId });
        const data = {
            answer: Answer[0].answer,
            explanation: Answer[0].explanation
        }
        res.send(data)
    }
    catch (err) {
        res.send(err.message)
    }
}

const quizDetails = (req, res) => {
    const quizNames = ['python', 'javascript', 'html'];
    const levels = ['easy', 'medium', 'hard']
    const nos = [5, 10, 15, 20]
    res.send({ quizNames, levels, nos })
}

module.exports = { addQuestion, getAllQuestions, getAnswer, quizDetails }