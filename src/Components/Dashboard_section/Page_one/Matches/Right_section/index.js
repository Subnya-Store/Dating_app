
import React, { useState } from "react";

export default function Index() {
  const [questionIndex, setQuestionIndex] = useState(0);


  const arrayquest = [
    {
      question: null,
      questionis: "What is your primary preferred meeting Age Group? ",
      options: ["a) 18-30", "b) 18-30", "c) 18-30", "d) 18-30", "e) 18-30", "f) 18-30", "g) 18-30"],
    },
    {
      question: "Question 2",
      questionis: "What is your Traditional background?",
      options: null
    },
    {
      question: "Question 3",
      questionis: "What is your primary preferred meeting Age Group? ",
      options: ["a) 18-30", "b) 18-30", "c) 18-30", "d) 18-30", "e) 18-30", "f) 18-30", "g) 18-30"],
    },
    {
      question: "Question 4",
      questionis: "How far are you willing to travel to meet up? ",
      options: ["A) 0-20 miles ", "B) Up to 50 miles away ", "C) I can travel far up to 100 miles", "D) I love travel 200 miles ", " E) Air travel is no problem 200 miles"],
    },
    {
      question: "Question 5",
      questionis:
        "Are you comfortable with meeting people from a different background than yourself?  ",
      options: ["Yes / No"],
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
    {arrayquest.map((e, index) => (
        <div
          key={index}
          className={`${index === questionIndex
            ? " w-[100%]  rounded-xl"
            : "hidden "
            }`}
        >
          {/* Question 1  */}
          <div className="">
            <h2 className=" px-4 capitalize text-sm text-black font-medium">
              {e.question}
            </h2>
            <h2 className=" px-4 capitalize text-sm text-black font-medium">
              {e.questionis}
            </h2>
          </div>

          {/* {questionIndex === 0 && (
            <div>
              <div className="flex justify-center items-center flex-col">

                <div className=" text-center mb-2  bg-white rounded-[8.94px] border border-violet-700">
                  <div className="opacity-70 text-black text-base pt-1 font-medium capitalize">
                    Upload
                  </div>
                </div>
              </div>
            </div>lo
            <div>
              hello
            </div>
          )} */}
      
          {/* Question 1  */}

         
            {questionIndex === 0 && e.options && e.options.length > 0 && (
            <div className=" mx-10 border border-[#7000ED] rounded-md">
              <div className="flex justify-center items-center flex-col">
                <div className="">
                  <div className=" gap-48 flex">
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

          {/* Question 2  */}
          {questionIndex === 1 && e.options && e.options.length > 0 && (
            <div className=" mx-10 border border-[#7000ED] rounded-md"> 
              <div className="flex justify-center items-center flex-col">
                <div className="">
                  <div className=" gap-6 flex">
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
          {/* Question 3  */}
          {questionIndex === 2 && e.options && e.options.length > 0 && (
            <div className=" mx-10 border border-[#7000ED] rounded-md">
              <div className="flex justify-center items-center flex-col">
                <div className="">
                  <div className=" gap-6 flex">
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

{/* Question 4 */}
{questionIndex === 3 && e.options && e.options.length > 0 && (
            <div>
              <div className="flex justify-center items-center flex-col">
                <div className="">
                  <div className=" gap-6 flex">
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
                    className="w-[360.78px] text-center   bg-white rounded-[3.94px] border border-violet-700"
                  >
                    <div className="opacity-70 text-black text-base py-3 font-medium capitalize">
                      {option}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}


<div className="flex justify-end">

            <button className="border text-center w-[20%] text-white bg-[#7000ED] border-[#7000ED] py-2  m-auto rounded-md  cursor-pointer "

              onClick={() => setQuestionIndex(questionIndex + 1)}
              
            >
              Next
            </button>
          </div>
         
        </div>
      ))}
    </div>
    </div>
  );
}

