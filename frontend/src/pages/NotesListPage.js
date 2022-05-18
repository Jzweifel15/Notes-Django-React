import React, { useState, useEffect } from 'react';

const NotesListPage = () => {

    let [notes, setNotes] = useState([]);

    useEffect(() => {
        getNotes();
    }, []);

    const getNotes = async () => {
        const response = await fetch("http://localhost:8000/api/notes/");
        const data = await response.json();
        console.log("DATA: " + data);
        setNotes(data);
    }

  return (
    <div>
        notes
    </div>
  )
}

export default NotesListPage;