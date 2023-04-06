// const Quiz = req.model
// for (let i of questions) {
//     count++;
//     let level = ''
//     if (count <= 12) {
//         level = 'easy'
//     }
//     else if (count <= 26) {
//         level = 'medium'
//     }
//     else {
//         level = 'hard'
//     }
//     i.level = level
//     i.options = JSON.stringify(i.options)
//     i.code = JSON.stringify(i.code)
//     const newQuestion = new Quiz(i)
//     await newQuestion.save()

// }
// res.send('questions added successfully!');

const questions = [
    {
        "question": "Which of the following elements in HTML5 defines video or movie content?",
        "options": ["<video>", "<movie>", "<audio>", "<media>"],
        "answer": "<video>",
        "explanation": "The media to which linked document is optimized is given by <media> tag. Before HTML5, videos could only be played with a plug-in (like flash). The HTML5 video element specifies a standard way to embed a video in a webpage. As like <video> elements, <audio> element contains additional files or streams like music, recording, etc."
    },
    {
        "question": "Which of the following is not the element associated with the HTML table layout?",
        "options": ["alignment", "color", "size", "spanning"],
        "answer": "color",
        "explanation": "There are three elements in HTML table layout i.e. size, spanning and alignment. Layout type can be achieved by setting Rows elements layout attribute to Fixed or Auto. Auto attribute relies on browser compatibility whereas fixed layout relies on developer specification."
    },
    {
        "question": "Which element is used for or styling HTML5 layout?",
        "options": ["CSS", "jQuery", "JavaScript", "PHP"],
        "answer": "CSS",
        "explanation": "For styling HTML5, CSS i.e Cascading Style Sheet is used. It is style sheet language and designed to describe presentation of its content including layouts, colors and fonts. CSS can control the layout of multiple webpages."
    },
    {
        "question": "Which HTML tag is used to insert an image?",
        "options": [
            "<img url=\"htmllogo.jpg\" />",
            "<img alt=\"htmllogo.jpg\" />",
            "<img src=\"htmllogo.jpg\" />",
            "<img link=\"htmllogo.jpg\" />"
        ],
        "answer": "<img src=\"htmllogo.jpg\" />",
        "explanation": "In HTML, <img> tag is used to insert an image in HTML page. Image tag has two attributes (src and Alt).<br/>\u00e2\u20ac\u201c> Src attribute is used to specify the image path.<br/>\u00e2\u20ac\u201c> Alt attribute is used to specify the alternate text for the image."
    },
    {
        "question": "HTML is a subset of ___________",
        "options": ["SGMT", "SGML", "SGME", "XHTML"],
        "answer": "SGML",
        "explanation": "HTML is a subset of SGML. SGML (Standard Generalized Markup Language) is a standard for specifying a document markup language or tag set."
    },
    {
        "question": "Which character is used to represent when a tag is closed in HTML?",
        "options": ["#", "!", "/", "\\"],
        "answer": "/",
        "explanation": "The forward-slash (/) is used to indicate the closure of a tag within HTML."
    }
]


module.exports = questions