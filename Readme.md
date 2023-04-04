# Quiz API

This is a RESTful API for a Quiz application. It provides endpoints to get questions, get answers by question id and add questions with an API key. It uses MongoDB as its database and ExpressJS as its web framework.

This Quiz API allows users to get questions, get answers by question ID, and add questions to the API with an API key. The API is secured with an API key that is required for adding questions.

Live-Link:

## Setup

1. Clone the repository

```
git clone https://github.com/nagarjuna06/quiz-api.git
```

2. Install dependencies

```
cd quiz-api
npm install
```

3. Set environment variables
   Copy the `.env` example file to `.env` and replace the values with your own. You will need to set the following environment variables:

**PORT:** The port the server will run on.

**MONGODB_URI:** The URI for your MongoDB database.

**API_KEY:** The API key that will be required to add questions.

### API Key

To use the POST endpoint, users need to provide an API key in the request header as follows:

```
X-Api-Key: <API_KEY>
```

## Endpoints

### GET /quiz/:quizName?level=&no=

This endpoint returns a list of all questions available in the API. Each question has a unique ID, a question text, and a list of answers.

Response

```
{
    "questionId:"92489jskdf38493jvdfjgo",
    "question": "Who developed Python Programming Language?",
    "options": [
      "Wick van Rossum",
      "Rasmus Lerdorf",
      "Guido van Rossum",
      "Niene Stom"
    ]
  }
```

### GET /quiz/:quizName/:questionId

This endpoint returns the answers for a specific question based on the provided question ID.

Response

```
{
    "answer": "Guido van Rossum",
    "explanation": "Python language is designed by a Dutch programmer Guido van Rossum in the Netherlands."
  }
```

### POST /questions

This endpoint allows users to add questions to the API. A valid API key is required to use this endpoint. The request body should include the question text and a list of answers. The response will include the new question ID.

```
{
    "question": "Who developed Python Programming Language?",
    "options": [
      "Wick van Rossum",
      "Rasmus Lerdorf",
      "Guido van Rossum",
      "Niene Stom"
    ],
    "answer": "Guido van Rossum",
    "explanation": "Python language is designed by a Dutch programmer Guido van Rossum in the Netherlands."
  }

```
