
import React, { useState } from "react";

export default function Index() {
  const [questionIndex, setQuestionIndex] = useState(0);


  const arrayquest = [
    {
      question: "question 1",
      questionis: "What is your primary preferred meeting Age Group? ",
      options: [{
        category: "A)",
        answer: "10-20"
      },
      {
        category: "B)",
        answer: "20-30"
      },
      {
        category: "C)",
        answer: "30-40"
      },
      {
        category: "D)",
        answer: "40-50"
      },
      {
        category: "E)",
        answer: "50-60"
      },
      {
        category: "F)",
        answer: "60-70"
      },
      {
        category: "G)",
        answer: "70-80"
      }
      ],
    },
    {
      question: "Question 2",
      questionis: "What is your Traditional background?",
      options: [{
        category: "A)",
        answer: "10-20"
      },
      {
        category: "B)",
        answer: "20-30"
      },
      {
        category: "C)",
        answer: "30-40"
      },
      {
        category: "D)",
        answer: "40-50"
      },
      {
        category: "E)",
        answer: "50-60"
      },
      {
        category: "F)",
        answer: "60-70"
      },
      {
        category: "G)",
        answer: "70-80"
      }
      ],
    },
    {
      question: "Question 3",
      questionis: "What is your primary preferred meeting Age Group? ",
      options: [{
        category: "A)",
        answer: "10-20"
      },
      {
        category: "B)",
        answer: "20-30"
      },
      {
        category: "C)",
        answer: "30-40"
      },
      {
        category: "D)",
        answer: "40-50"
      },
      {
        category: "E)",
        answer: "50-60"
      },
      {
        category: "F)",
        answer: "60-70"
      },
      {
        category: "G)",
        answer: "70-80"
      }
      ],
    },
    {
      question: "Question 4",
      questionis: "How far are you willing to travel to meet up? ",
      // options: ["A) 0-20 miles ", "B) Up to 50 miles away ", "C) I can travel far up to 100 miles", "D) I love travel 200 miles ", " E) Air travel is no problem 200 miles"],
      options: [{
        category: "A)",
        answer: "10-20"
      },
      {
        category: "B)",
        answer: "20-30"
      },
      {
        category: "C)",
        answer: "30-40"
      },
      {
        category: "D)",
        answer: "40-50"
      },
      {
        category: "E)",
        answer: "50-60"
      },
      {
        category: "F)",
        answer: "60-70"
      },
      {
        category: "G)",
        answer: "70-80"
      }
      ],

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
    <div className="bg-white md:m-4  md:w-[50%] rounded-md  md:px-10 px-3 py-2 ">
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
          <div onClick={() => console.log(x)} className={`${i === questionIndex ? "flex  flex-col" : "hidden"}`}>
            {x.questionis}
            <div className=" border-[#7000ED] border  rounded-xl md:mr-10"> 
               <div className="grid grid-cols-2 grid-rows-3 gap-4 text-center px-5">
              {x.options.map((option, index) => (
                <div className={`${index === x.options.length - 1 ? "hidden" : ""}`} key={index}>
                  {option.category}
                  {option.answer}
                </div>
              ))}
             
            </div>

            <div className={` ${i == 4 ? "hidden" : ""} flex   justify-center items-center md:flex-col`}>
              {x.options.slice(-1)[0].category}
              {x.options.slice(-1)[0].answer}
            </div>
            </div>
           
          </div>
        ))}
      </div>

      {/* button  */}
      {questionIndex > 3 ? '' : <div className="flex justify-end">
        <button
          onClick={() => setQuestionIndex(questionIndex + 1)}
          className="cursor-pointer capitalize border  text-center text-white bg-[#7000ED] border-[#7000ED] md:w-[20%] w-full rounded-md py-2 m-1 justify-end"
        >
          Next
        </button>
      </div>}
    </div>
  );
}

