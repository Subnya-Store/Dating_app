
import React, { useState } from "react";

export default function Index() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const camerImg = "images/camera.png";

  const arrayquest = [
    {
      question: "Question 1",
      questionis: `Add the 1st Profile Picture that represents you. This does not have to be your face. 
      [Upload an image] example: A fish`,
    },
    {
      question: "Question 2",
      questionis: "What is your Traditional background?",
    },
    {
      question: "Question 3",
      questionis: "What is your primary preferred meeting Age Group? ",
      options: ["a) 18-30", "b) 18-30", "c) 18-30", "d) 18-30" ,"e) 18-30" ,"f) 18-30" ,"g) 18-30"],
    },
    {
      question: "Question 4",
      questionis: "How far are you willing to travel to meet up? ",
      options: ["A) 0-20 miles " ,"B) Up to 50 miles away ", "C) I can travel far up to 100 miles" , "D) I love travel 200 miles ", " E) Air travel is no problem 200 miles"],
    },
    {
      question: "Question 5",
      questionis:
        "Are you comfortable with meeting people from a different background than yourself?  ",
        options: ["Yes / No"],
    },
  ];

  return (
    <div className="h-screen flex justify-center">
      {arrayquest.map((e, index) => (
        <div
          key={index}
          className={`${
            index === questionIndex
              ? "bg-[#FFF] shadow-xl opacity-[0.92] backdrop-blur-[6.084905624389648px] w-[65%] m-auto  py-12 px-10  rounded-xl"
              : "hidden"
          }`}
        >
             {/* Question 1  */}
          <div>
            <h2 className="text-center pb-4 capitalize text-lg text-black font-medium">
              {e.question}
            </h2>
            <h2 className="text-center pb-4 capitalize text-lg text-black font-medium">
              {e.questionis}
            </h2>
          </div>

          {questionIndex === 0 && (
            <div>
              <div className="flex justify-center items-center flex-col">
                <div className="border w-[100px] py-4 px-4 m-auto bg-white">
                  <img
                    src={camerImg}
                    className="w-full m-auto align-middle text-center object-contain"
                  />
                </div>
                <div className="w-[144.78px] h-[37.54px] text-center mb-2 mt-4 bg-white rounded-[8.94px] border border-violet-700">
                  <div className="opacity-70 text-black text-base pt-1 font-medium capitalize">
                    Upload
                  </div>
                </div>
              </div>
            </div>
          )}
             {/* Question 2  */}
          {questionIndex === 1 && (
            <div>
              <div className="flex justify-center items-center flex-col">
                <div className="w-[360.78px] text-center mb-3 mt-4 bg-white rounded-[3.94px] border border-violet-700">
                  <div className="opacity-70 text-black text-base py-3 font-medium capitalize">
                    Example: Swedish
                  </div>
                </div>
              </div>
            </div>
          )}

                 {/* Question 3  */}

{questionIndex === 2 && e.options && e.options.length > 0 && (
  <div>
    <div className="flex justify-center items-center flex-col">
      <div className="">
        <div className=" w-80 justify-between  flex"> 
          <div>
          {e.options.slice(0, 3).map((option, optionIndex) => (
          <div
            key={optionIndex} className="" >
            <div >
              {option}
            </div>
          </div>
        ))}
        
             </div>
       
        <div> {e.options.slice(3, 6).map((option, optionIndex) => (
          <div
            key={optionIndex} className="" >
            <div >
              {option}
            </div>
          </div>
        ))} </div>
         </div>
      <div className="w-80 flex justify-center pb-4">
          <div className="" >
            {e.options[6]}
          </div>
        </div>
      </div>
    </div>
  </div>
                  
)}
             {/* Question 4  */}
             {questionIndex === 3 && e.options && e.options.length > 0 && (
  <div>
    <div className="flex justify-center items-center flex-col">
      <div className="">
        <div className=" pb-4 gap-6 flex"> 
          <div>
          {e.options.slice(0, 3).map((option, optionIndex) => (
          <div
            key={optionIndex} className="" >
            <div >
              {option}
            </div>
          </div>
        ))}
        
             </div>
       
        <div> {e.options.slice(3, 5).map((option, optionIndex) => (
          <div
            key={optionIndex} className="" >
            <div >
              {option}
            </div>
          </div>
        ))} </div>
         </div>
     
      </div>
    </div>
  </div>
                  
)}
      
           
        

               {/* Question 5 */}
 {questionIndex === 4 && e.options && e.options.length > 0 && (
            <div>
              <div className="flex justify-center items-center flex-col">
                {e.options.map((option, optionIndex) => (
                  <div
                    key={optionIndex}
                    className="w-[360.78px] text-center mb-3 mt-4 bg-white rounded-[3.94px] border border-violet-700"
                  >
                    <div className="opacity-70 text-black text-base py-3 font-medium capitalize">
                      {option}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}


          <div className="border w-[20%] text-center text-white bg-[#7000ED] border-[#7000ED] py-2 m-auto rounded-md">
            <button
              onClick={() => setQuestionIndex(questionIndex + 1)}
              className="cursor-pointer capitalize"
            >
              Next
            </button>
          </div>
          <div className="text-center cursor-pointer mt-3">
            {questionIndex + 1} of 5
          </div>
        </div>
      ))}
    </div>
  );
}

