import React, {useEffect, useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [triviaQuestions, setQuestions] = useState([])


  useEffect(() => {
    fetch('http://localhost:4000/questions')
    .then(r => r.json())
    .then(questions => (console.log(questions), setQuestions(questions.map(q => q))))
  }, [])

    console.log(triviaQuestions)

    function handleDelete(event){

      event.preventDefault()

      fetch(`http://localhost:4000/questions/${event.target.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        }
      })
      
      console.log(event.target.id)
    
      const filteredQuestions = triviaQuestions.filter(item => item.id !== parseInt(event.target.id))
      setQuestions(filteredQuestions)

    }

    const handleAddQuestion = formData => {
            console.log(formData)
            setQuestions([...triviaQuestions, formData])
    }  

    const handleChange = event => {

      console.log(event.target.id)
      console.log(event.target.value)

      fetch(`http://localhost:4000/questions/${event.target.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
          correctIndex : parseInt(event.target.value)
      }),
    })
      .then((r) => r.json())
      .then((updatedItem) => console.log(updatedItem));
    }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm onAddNewQuestion={handleAddQuestion}/> : <QuestionList triviaQuestions={triviaQuestions} handleDelete={handleDelete} handleChange={handleChange} />}
    </main>
  );
}

export default App;
