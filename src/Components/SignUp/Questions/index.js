import React, { useState } from 'react'

export default function index() {
  const [questionIndex, setquestionIndex] = useState(0)

  const arrayquest = [
    {
      question: 'Question 1',
      answer: [
        {
          answer: "answer 1"
        },
        {
          answer: "answer 2"
        },
        {
          answer: "answer 3"
        },
        {
          answer: "answer 4"
        },
      ]
    },
    {
      question: 'Question 2',
      answer: [
        {
          answer: "answer 1"
        },
        {
          answer: "answer 2"
        },
        {
          answer: "answer 3"
        },
        {
          answer: "answer 4"
        },
      ]
    },
  ]
  // console.log(array[0])
  return (
    <div className="h-screen">
      {/* {arrayquest.map((e, index) => (
        <div key={index} className="w-full bg-white p-10 rounded-2xl shadow-lg -z-10 opacity-90 justify-center">
          <h2>{e.question}</h2>
          {e.answer.map((ans, ansIndex) => (
            <div key={ansIndex}>
              {ans.answer}
            </div>
          ))}
        </div>
      ))} */}
      <div className="bg-[url('/Images/question_img.png')] bg-center p-10 m-4 bg-no-repeat" >
        {/* <img src='Images/question_img'/> */}

        {
          arrayquest[questionIndex].question
        }
        {
          arrayquest[questionIndex].answer.map(x => (
            <div>
              {x.answer}
            </div>
          ))
        }
        <button onClick={() => setquestionIndex(questionIndex + 1)}>next</button>
        <button onClick={() => setquestionIndex(questionIndex - 1)}>previous</button>
      </div>
    </div>
  )
}
