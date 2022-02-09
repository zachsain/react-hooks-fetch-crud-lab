import React from "react";
import QuestionItem from './QuestionItem'
import QuestionForm from "./QuestionForm";

function QuestionList({triviaQuestions, handleDelete, handleChange}) { 

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
       { triviaQuestions.map(question => <QuestionItem question={question} handleDelete={handleDelete} handleChange={handleChange}/> )}
        {/* display QuestionItem components here after fetching */}
        </ul>
    </section>
  );
}

export default QuestionList;
