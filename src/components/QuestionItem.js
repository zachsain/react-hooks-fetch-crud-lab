import React from "react";

function QuestionItem({ question, handleDelete, handleChange}) {

  const { id, prompt, answers, correctIndex } = question;
  console.log(question)
  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));



  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select  id={question.id} onChange={handleChange} defaultValue={correctIndex}>{options}</select>
      </label>
      <button id={question.id} onClick={handleDelete}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
