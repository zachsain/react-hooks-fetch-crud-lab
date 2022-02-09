import React, {useEffect, useState} from "react";
import QuestionItem from './QuestionItem'

function QuestionList() { 
  const [triviaQuestions, setQuestions] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/questions')
    .then(r => r.json())
    .then(questions => (console.log(questions), setQuestions(questions)))
  }, [])



  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        <QuestionItem question={triviaQuestions} />
        {/* display QuestionItem components here after fetching */}
        </ul>
    </section>
  );
}

export default QuestionList;
