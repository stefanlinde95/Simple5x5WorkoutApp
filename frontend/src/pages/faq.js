import React, { useState } from "react";
import questions from "../components/data/faq.data";
import { FaqStyle } from "../components/styles/Faq.styles";

const SingleQuestion = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article>
      <button
        className="sm:w-full md:w-90 flex border border-black rounded-xl my-1 drop-shadow-xl"
        onClick={() => setShowInfo(!showInfo)}
      >
        <p className="pl-4 transform">{showInfo ? "-" : "+"}</p>
        <p className="pl-2">{title}</p>
      </button>
      {showInfo && (
        <p className="bg-white text-black py-3 px-4 rounded drop-shadow-xl">
          {info}
        </p>
      )}
    </article>
  );
};

const Faq = () => {
  return (
    <FaqStyle>
      <div className="my-2">
        <div className="sm:w-full md:w-4/5 lg:w-3/5 block mx-auto text-center text-white">
          <h1 className="text-4xl">FAQ</h1>
          <div className="my-2">
            {questions.map((question) => {
              const { id } = question;
              return <SingleQuestion key={id} {...question} />;
            })}
          </div>
        </div>
      </div>
    </FaqStyle>
  );
};

export default Faq;
