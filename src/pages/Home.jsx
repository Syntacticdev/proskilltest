import React, { useState, useEffect } from "react";
import Counter from "../components/Counter";
import Pagination from "../components/Pagination";
import QuestionCard from "../components/QuestionCard";
import questionsf from "../questions.json";

const Home = () => {
  const [questions, setQuestions] = useState(questionsf);
  const [currentPage, setCurrentPage] = useState(1);
  const [questionPerPage, setQuestionPerPage] = useState(1);

  const indexOfLastQuestion = currentPage * questionPerPage;
  const indexOfFirstQuestion = indexOfLastQuestion - questionPerPage;
  const currentQuestion = questions.slice(
    indexOfFirstQuestion,
    indexOfLastQuestion
  );
  console.log(questionsf);
  const paginate = (number) => setCurrentPage(number);
  const prev = () => {
    setCurrentPage((prev) => prev - 1);
  };
  const next = () => {
    setCurrentPage((prev) => prev + 1);
  };

  // useEffect(() => {
  //   fetch(
  //     "https://opentdb.com/api.php?amount=20&category=18&difficulty=medium&type=multiple"
  //   )
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setQuestions(data.results);
  //       console.log(data.results);
  //     });
  // }, []);
  return (
    <div className="bg-[url('/icon_image/edu_bg.png')] bg-cover bg-no-repeat bg-center min-h-screen">
      <h1>Questions</h1>
      <Counter />
      <QuestionCard
        currentQuestion={currentQuestion}
        currentPage={currentPage}
      />
      {/* <Pagination
        paginate={paginate}
        totalQuestion={questions.length}
        questionPerPage={questionPerPage}
      /> */}

      <div className="mt-4 flex justify-between">
        <button
          disabled={currentPage == 1}
          className="bg-red-400 text-white px-6 py-2"
          onClick={prev}
        >
          Prev
        </button>
        <button
          disabled={currentPage == questions.length}
          className="bg-green-400 text-white px-6 py-2"
          onClick={next}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Home;
