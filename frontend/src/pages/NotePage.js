import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { ReactComponent as ArrowLeft } from "../assets/arrow-left.svg";
import { useNavigate } from "react-router-dom";

const NotePage = () => {

  let { id } = useParams();
  let navigate = useNavigate();

  let [note, setNote] = useState(null);

  useEffect(() => {
    getNote();
  }, [id]);

  const getNote = async () => {

    if (id === "new") { return; }

    const response = await fetch(`http://localhost:8000/api/notes/${id}`);
    const data = await response.json();
    setNote(data);
  }

  const createNote = async () => {
    fetch(`http://localhost:8000/api/notes/new/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(note)
    });
  }

  const editNote = async () => {
    fetch(`http://localhost:8000/api/notes/${id}/edit/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(note)
    });
  }

  const deleteNote = async () => {
    fetch(`http://localhost:8000/api/notes/${id}/delete/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    });
    navigate("/");
  }

  const handleSubmit = () => {
    if (id !== "new" && note.body !== "") {
      deleteNote();
    }
    else if (id !== "new") {
      editNote();
    }
    else if (id === "new" && note !== null) {
      createNote();
    }

    navigate("/");
  }

  return (
    <div className="note">

      <div className="note-header">
        <h3>
          <ArrowLeft onClick={ handleSubmit } />
        </h3>
        {id !== "new" ? (
          <button onClick={ deleteNote }>Delete</button>
        ) : (
          <button onClick={ handleSubmit }>Done</button>
        )}
      </div>

        <textarea onChange={(e) => { setNote({ ...note, 'body': e.target.value }) }} 
                  defaultValue={ note?.body }>
        </textarea>

    </div>
  )
}

export default NotePage;