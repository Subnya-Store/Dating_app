
import API from "@/API/API";
import React, { useState } from "react";

export default function Index({ setState, inputs }) {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [optionIndexselected, setoptionIndexselected] = useState(null);
  const [optionIndexselected1, setoptionIndexselected1] = useState(null);
  const [optionIndexselected2, setoptionIndexselected2] = useState(null);
  const [optionIndexselected3, setoptionIndexselected3] = useState(null);
  const [file_image, setfile_image] = useState('');
  const [Image, setImage] = useState("/Images/camera.png");
  const [Quest_answer, setQuest_answer] = useState({
    questions: questionIndex,
    answers: ''
  });
  console.log({ Quest_answer, questionIndex })
  const camerImg = "/Images/camera.png";

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
      options: ["18-30", "31-40", "41-55", "56-66", "67-78", "79-89", "90-200"],
    },
    {
      question: "Question 4",
      questionis: "How far are you willing to travel to meet up? ",
      options: ["0-20 miles ", "Up to 50 miles away ", "I can travel far up to 100 miles", "I love travel 200 miles ", "Air travel is no problem 200 miles"],
    },
    {
      question: "Question 5",
      questionis:
        "Are you comfortable with meeting people from a different background than yourself?  ",
      options: ["Yes", "No"],
    },
    {
      question: "Question 6",
      questionis:
        "Who are you interested in?",
      options: ["male", "female"],
    },
  ];

  const Traditions = [
    "White people",
    "Asian people",
    "British people",
    "Hispanic and Latino Americans",
    "African Americans",
    "Alaska Natives",
    "British Asians",
    "British African - Caribbean people",
    "Gaoshan Han",
    "M'Bato",
    "Dungri Bhil",
    "Rawal Bhil",
    "Evalue people",
    "Multiracial people",
    "White Americans",
    "Indigenous peoples",
    "Black people",
    "Americans",
    "Pacific Islander",
    "Puerto Ricans",
    "Latin Americans",
    "Native Americans in the United States",
    "Micronesians",
    "Melanesians",
    "Arabs",
    "White Hispanic and Latino Americans",
    "British Chinese",
    "British Indians",
    "Asian Americans",
    "Māori people",
    "East Asian people",
    "Kazakhs",
    "Celts",
    "Huaorani people",
    "ǃKung people",
    "Sámi",
    "Native Hawaiians",
    "White British",
    "Kurds",
    "Mestizo",
    "Afro - Asians",
    "White Africans of European ancestry",
    "Ilocano people",
    "Serbs",
    "Bantu peoples",
    "Zhuang people",
    "Basques",
    "Tibetan people",
    "Assyrian people",
    "Tamils",
    "Vietnamese Americans"
  ];


  const Quest_ans = () => {
    API.fetchPost({
      questions: Quest_answer.questions,
      answers: Quest_answer.answers,
      username: inputs.username,
      full_name: inputs.full_name
    }, '/questionair')
      .then(x => {
        if (questionIndex == 5) {
          setQuest_answer({ ...Quest_answer, questions: questionIndex + 1 })
          // window.location.href = '/signin'
        } else {
          setQuestionIndex(questionIndex + 1),
            setQuest_answer({ ...Quest_answer, questions: questionIndex + 1 }),
            console.log(x)
        }

      })
      .catch(x => console.log(x))
  }

  const First_Quest = (e) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append('images', file_image);
    formData.append('username', inputs.username);
    formData.append('full_name', inputs.full_name);

    API.fetchPost(formData, '/quest_image')
      .then(x => {
        setQuestionIndex(questionIndex + 1)
        // setQuest_answer({ ...Quest_answer, questions: questionIndex + 1 })
        // console.log(x)
      })
      .catch(x => console.log(x))
  }

  const Last_quest = (e) => {
    e.preventDefault()
    // window.location.href = '/signin'
    API.fetchPost({ interest: Quest_answer.answers, username: inputs.username, full_name: inputs.full_name }, '/interestedin')
      .then(x => window.location.href = '/signin')
      .catch(x => console.log(x))
  }

  const handleImageChange = (e) => {
    // Access the uploaded file
    const uploadedFile = e.target.files[0];

    setfile_image(uploadedFile)
    // setQuest_answer({ ...Quest_answer, questions: questionIndex + 1 })
    if (uploadedFile) {
      const imageURL = URL.createObjectURL(uploadedFile);
      // console.log(imageURL,uploadedFile)
      setImage(imageURL);
    }
  };
  // console.log(Image,'checking')
  return (
    <div className="h-screen flex justify-center">
      {arrayquest.map((e, index) => (
        <div
          key={index}
          className={`${index === questionIndex
            ? "bg-[#FFF] shadow-xl opacity-[0.92] backdrop-blur-[6.084905624389648px] w-[65%] m-auto  py-12 px-10  rounded-xl"
            : "hidden"
            }`}
        >
          {/* Questions */}
          <div>
            <h2 className="text-center pb-4 capitalize text-lg text-black font-medium">
              {e.question}
            </h2>
            <h2 className="text-center pb-4 capitalize text-lg text-black font-medium">
              {e.questionis}
            </h2>
          </div>

          {/* Answers  */}
          {
            questionIndex === 0 && (
              <div>
                <div className="flex justify-center items-center flex-col">
                  <div className="py-2 px-7 text-center bg-white rounded-[3.94px] border border-violet-700 m-4">
                   
                    <select
                      onChange={(e) =>
                        setQuest_answer({ questions: questionIndex + 1, answers: e.target.value })
                      }
                      className="opacity-70 text-black text-base py-3 font-medium capitalize outline-none"
                    >
                      <option value="">Select a tradition</option>
                      {Traditions.map((tradition, index) => (
                        <option key={index} value={tradition}>
                          {tradition}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

            ) ||
            questionIndex === 2 && e.options && e.options.length > 0 && (
              <div >
                <div className="flex justify-center items-center flex-col">
                  <div className="w-full">
                    <div className=" w-full   flex justify-center items-center">
                      <div className="grid grid-cols-2 content-evenly w-full">
                        {e.options.slice(0, 7).map((option, optionIndex) => (
                          <div
                            onClick={() => (setQuest_answer({ questions: questionIndex + 1, answers: option }), setoptionIndexselected(optionIndex))}
                            key={optionIndex}
                            className={`flex justify-center items-center `}
                          >
                            <div className={`${optionIndex == optionIndexselected && 'border text-white bg-[#7000ED] border-[#7000ED]'}`}>
                              {String.fromCharCode(65 + optionIndex)}. {option}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            ) ||
            questionIndex === 3 && e.options && e.options.length > 0 && (
              <div>
                <div className="flex justify-center items-center flex-col">
                  <div className="">
                    <div className=" pb-4 gap-6 flex">
                      <div>
                        {e.options.slice(0, 6).map((option, optionIndex) => (
                          <div
                            onClick={() => (setQuest_answer({ questions: questionIndex + 1, answers: option }), setoptionIndexselected1(optionIndex))}
                            key={optionIndex}
                            className="flex "
                          >
                            <div className={`${optionIndex == optionIndexselected1 && 'border text-white bg-[#7000ED] border-[#7000ED]'}`}>
                              {String.fromCharCode(65 + optionIndex)}. {option}
                            </div>
                          </div>
                        ))}

                      </div>
                    </div>

                  </div>
                </div>
              </div>

            ) ||
            questionIndex === 4 && e.options && e.options.length > 0 && (
              <div>
                <div className="flex justify-center items-center flex-col">
                  {e.options.map((option, optionIndex) => (
                    <div
                      onClick={() => (setQuest_answer({ questions: questionIndex + 1, answers: option }), setoptionIndexselected2(optionIndex))}
                      key={optionIndex}
                      className={`w-[360.78px] text-center mb-3 mt-4 bg-white rounded-[3.94px] border border-violet-700 ${optionIndex == optionIndexselected2 && ' text-white  border-[#7000ED]'}`}
                    >
                      <div className="opacity-70 text-black text-base py-3 font-medium capitalize">
                        {option}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) ||
            questionIndex === 5 && e.options && e.options.length > 0 && (
              <div>
                <div className="flex justify-center items-center flex-col">
                  {e.options.map((option, optionIndex) => (
                    <div
                      onClick={() => (setQuest_answer({ questions: questionIndex + 1, answers: option }), setoptionIndexselected3(optionIndex))}
                      key={optionIndex}
                      className={`w-[360.78px] text-center mb-3 mt-4 bg-white rounded-[3.94px] border border-violet-700 ${optionIndex == optionIndexselected3 && ' text-white  border-[#7000ED]'}`}
                    >
                      <div className="opacity-70 text-black text-base py-3 font-medium capitalize">
                        {option}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          }

          <div className="border w-[20%] text-center text-white bg-[#7000ED] border-[#7000ED] py-2 m-auto rounded-md">
            {questionIndex == 0 &&
              <button
                onClick={First_Quest}
                className="cursor-pointer capitalize"
              >
                Next
              </button> ||
              questionIndex == 1 &&
              <button
                onClick={Quest_ans}
                className="cursor-pointer capitalize"
              >
                Next
              </button> ||
              questionIndex == 2 &&
              <button
                onClick={Quest_ans}
                className="cursor-pointer capitalize"
              >
                Next
              </button> ||
              questionIndex == 3 &&
              <button
                onClick={Quest_ans}
                className="cursor-pointer capitalize"
              >
                Next
              </button> ||
              questionIndex == 4 &&
              <button
                onClick={Quest_ans}
                className="cursor-pointer capitalize"
              >
                Next
              </button> ||
              questionIndex == 5 &&
              <button
                onClick={Last_quest}
                className="cursor-pointer capitalize"
              >
                Next
              </button>
            }
          </div>
          <div className="text-center cursor-pointer mt-3">
            {questionIndex + 1} of 6
          </div>
        </div>
      ))}
    </div>
  );
}

