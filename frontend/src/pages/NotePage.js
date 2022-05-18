import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { ReactComponent as ArrowLeft } from "../assets/arrow-left.svg";
import { Link } from "react-router-dom";

const NotePage = () => {

    let { id } = useParams();

    let [note, setNote] = useState(null);

    useEffect(() => {
        getNote();
    }, [id]);

    const getNote = async () => {
        const response = await fetch(`http://localhost:8000/api/notes/${id}`);
        const data = await response.json();
        setNote(data);
    }

  return (
    <div className="note">
      <div className="note-header">
        <h3>
          <Link to="/"><ArrowLeft /></Link>
        </h3>
      </div>
        <textarea defaultValue={ note?.body }></textarea>
    </div>
  )
}

export default NotePage;