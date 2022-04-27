import React from "react";

const Pagination = ({ totalQuestion, questionPerPage, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalQuestion / questionPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      <ul className="grid grid-cols-10 gap-3 px-3 sm:grid-cols-12">
        {pageNumbers.map((number) => (
          <li
            key={number}
            className="border-2 text-center border-white text-yellow-300"
          >
            <button onClick={() => paginate(number)}>{number}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
