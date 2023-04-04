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