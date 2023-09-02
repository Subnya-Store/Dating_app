
import React, { useState } from "react";

export default function Index() {
  const [questionIndex, setQuestionIndex] = useState(0);


  const arrayquest = [
    {
      question: "question 1",
      questionis: "What is your primary preferred meeting Age Group? ",
      options: [{
        category: "A",
        answer: "0-20 miles"
      },
      {
        category: "B",
        answer: "Up to 50 miles away"
      },
      {
        category: "C",
        answer: " I can travel far up to 100 miles"
      },
      {
        category: "D",
        answer: "I love travel 200 miles"
      },
      {
        category: "E",
        answer: " Air travel is no problem 200 miles"
      },
      {
        category: "F",
        answer: "79-80"
      },
      {
        category: "G",
        answer: "80-85"
      }
      ],
    },
    {
      question: "Question 2",
      questionis: "What is your Traditional background?",
      options: [{
        category: "Aa",
        answer: "0-20 miles"
      },
      {
        category: "Bb",
        answer: "Up to 50 miles away"
      },
      {
        category: "C",
        answer: " I can travel far up to 100 miles"
      },
      {
        category: "D",
        answer: "I love travel 200 miles"
      },
      {
        category: "E",
        answer: " Air travel is no problem 200 miles"
      }
      ],
    },
    {
      question: "Question 3",
      questionis: "What is your primary preferred meeting Age Group? ",
      options: [{
        category: "A",
        answer: "0-20 miles"
      },
      {
        category: "B",
        answer: "Up to 50 miles away"
      },
      {
        category: "C",
        answer: " I can travel far up to 100 miles"
      },
      {
        category: "D",
        answer: "I love travel 200 miles"
      },
      {
        category: "E",
        answer: " Air travel is no problem 200 miles"
      }
      ],
    },
    {
      question: "Question 4",
      questionis: "How far are you willing to travel to meet up? ",
      // options: ["A) 0-20 miles ", "B) Up to 50 miles away ", "C) I can travel far up to 100 miles", "D) I love travel 200 miles ", " E) Air travel is no problem 200 miles"],
      options: [{
        category: "A",
        answer: "0-20 miles"
      },
      {
        category: "B",
        answer: "Up to 50 miles away"
      },
      {
        category: "C",
        answer: " I can travel far up to 100 miles"
      },
      {
        category: "D",
        answer: "I love travel 200 miles"
      },
      {
        category: "E",
        answer: " Air travel is no problem 200 miles"
      }]

    },
    {
      question: "Question 5",
      questionis:
        "Are you comfortable with meeting people from a different background than yourself?  ",
      options: [{
        category: "",
        answer: "Yes"
      }, {
        category: "",
        answer: "No"
      }],
    },
  ];
  return (
    <div className="bg-white m-4  w-[50%] rounded-md  px-10  ">
      <div className="   py-2 flex justify-between ">

        <div>
          <h2 className="text-[#050062] text-lg font-bold">Improve your Matches</h2>
        </div>
        <div className="text-center cursor-pointer">
          {questionIndex + 1} of 5
        </div>
      </div>
      <div>
        <p className="text-[#050062]  font-bold  ">Continue answering Profile Questions</p>
      </div>
      {/* question section */}
      <div>
        {arrayquest.map((x, i) => (
          <div onClick={() => console.log(x)} className={`${i === questionIndex ? "flex  border-[#7000ED] border px-10 rounded-xl justify-center items-center flex-col" : "hidden"}`}>
            {x.questionis}
            <div className="grid grid-cols-2 grid-rows-3 gap-4 text-center">
              {x.options.map((option, index) => (
                <div className={`border border-red-400 ${index === x.options.length - 1 ? "hidden" : ""}`} key={index}>
                  {option.category}
                  {option.answer}
                </div>
              ))}
             
            </div>

            <div className={`border border-red-400 ${i == 4 ? "hidden" : ""}`}>
              {x.options.slice(-1)[0].category}
              {x.options.slice(-1)[0].answer}
            </div>
          </div>
        ))}
      </div>

      {/* button  */}
      {questionIndex > 3 ? '' : <div className="flex justify-end">
        <button
          onClick={() => setQuestionIndex(questionIndex + 1)}
          className="cursor-pointer capitalize border  text-center text-white bg-[#7000ED] border-[#7000ED] w-[20%] rounded-md py-2 justify-end"
        >
          Next
        </button>
      </div>}
    </div>
  );
}

