import React, { useState, useEffect } from "react";

const QuestionCard = ({ currentQuestion, currentPage }) => {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const incorrectAnswers = currentQuestion[0]?.incorrect_answers;
    const correctAnswer = currentQuestion[0]?.correct_answer;
    console.log(currentQuestion);

    let array = incorrectAnswers;
    let index = Math.floor(Math.random() * 3);
    let optionToAdd = correctAnswer;
    for (let i = array.length; i > index; i--) {
      array[i] = array[i - 1];
    }
    array[index] = optionToAdd;
    setOptions(array);
    console.log(array);
  }, [currentQuestion]);

  return (
    <div className="px-4 min-h-[60vh] rounded-md py-6 text-white">
      <h3 className="my-4">
        <span className="mr-3 text-2xl">Q{currentPage}</span>{" "}
        <span className="text-xl">{currentQuestion[0]?.question}</span>
      </h3>
      {options.map((option, index) => (
        <div
          className="flex mb-3 items-center py-2 bg-blue-400 rounded-md"
          key={index}
        >
          <input type="radio" name="option" id="" className="mx-2" />
          <span>{option}</span>
        </div>
      ))}
    </div>
  );
};

export default QuestionCard;
