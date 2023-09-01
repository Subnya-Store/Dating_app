
import React, { useState } from "react";

export default function Index() {
  const [questionIndex, setQuestionIndex] = useState(0);


  const arrayquest = [
    {
      question:"question 1",
      questionis: "What is your primary preferred meeting Age Group? ",
      options: [{
        category:"A",
        answer:"0-20 miles"
      },
      {
        category:"B",
        answer:"Up to 50 miles away"
      }, 
      {
        category:"C",
        answer:" I can travel far up to 100 miles"
      },
      {
        category:"D",
        answer:"I love travel 200 miles"
      },
      {
        category:"E",
        answer:" Air travel is no problem 200 miles"
      }
    ],
    },
    {
      question: "Question 2",
      questionis: "What is your Traditional background?",
      options: [{
        category:"A",
        answer:"0-20 miles"
      },
      {
        category:"B",
        answer:"Up to 50 miles away"
      }, 
      {
        category:"C",
        answer:" I can travel far up to 100 miles"
      },
      {
        category:"D",
        answer:"I love travel 200 miles"
      },
      {
        category:"E",
        answer:" Air travel is no problem 200 miles"
      }
    ],
    },
    {
      question: "Question 3",
      questionis: "What is your primary preferred meeting Age Group? ",
      options: [{
        category:"A",
        answer:"0-20 miles"
      },
      {
        category:"B",
        answer:"Up to 50 miles away"
      }, 
      {
        category:"C",
        answer:" I can travel far up to 100 miles"
      },
      {
        category:"D",
        answer:"I love travel 200 miles"
      },
      {
        category:"E",
        answer:" Air travel is no problem 200 miles"
      }
    ],
    },
    {
      question: "Question 4",
      questionis: "How far are you willing to travel to meet up? ",
      // options: ["A) 0-20 miles ", "B) Up to 50 miles away ", "C) I can travel far up to 100 miles", "D) I love travel 200 miles ", " E) Air travel is no problem 200 miles"],
      options: [{
        category:"A",
        answer:"0-20 miles"
      },
      {
        category:"B",
        answer:"Up to 50 miles away"
      }, 
      {
        category:"C",
        answer:" I can travel far up to 100 miles"
      },
      {
        category:"D",
        answer:"I love travel 200 miles"
      },
      {
        category:"E",
        answer:" Air travel is no problem 200 miles"
      }]
     
    },
    {
      question: "Question 5",
      questionis:
        "Are you comfortable with meeting people from a different background than yourself?  ",
      options: ["Yes" , "No"],
    },
  ];

  return (
    <div className="bg-white m-4  w-[50%] rounded-md ">
      <div className="  px-4 py-2 flex justify-between ">
       
        <div>
        <h2 className="text-[#050062] text-lg font-bold">Improve your Matches</h2>
        </div>
        <div className="text-center cursor-pointer">
          {questionIndex + 1} of 5
        </div>
      </div>
      <div>
        <p className="text-[#050062] px-4 font-bold">Continue answering Profile Questions</p>
      </div>
    <div>
      {
      arrayquest.map((x,i)=>(
        <ul className={`${i == questionIndex ?"":"hidden"}`}>
          {x.questionis}
          <div> 
            
        {x.options.map((option)=>(
            // <div className=" grid grid-cols-2 gap-x-8 ">
            //   {option.category}:{option.answer} </div>
            <ul className=" flex gap-4">
              <li>  {option.category}</li>
              <li>  {option.answer}</li>
            </ul>
           ))}
   
          </div>
        </ul>
        
      )
      ) }
   
    </div>
    
    </div>
  );
}

