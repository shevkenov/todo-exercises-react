import React, { useState } from "react";
import { useExerciseContext } from "../../context/ExercisesContext";
import { useParams, useNavigate } from "react-router-dom";

import "./CreateExercise.css";

const CreateExercise = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addExercise, exercises, editExercise } = useExerciseContext();
  let itemFound;
  if (id) {
    itemFound = exercises.find((i) => parseInt(i.id) === parseInt(id));
  }

  const [title, setTitle] = useState(itemFound ? itemFound.title : "");
  const [details, setDetails] = useState(itemFound ? itemFound.details : "");

  const submitHandler = (e) => {
    e.preventDefault();
    if (id) {
      itemFound = {...itemFound, details, title}
      editExercise(itemFound);
    } else {
      addExercise(title, details);
    }
    navigate('/')
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="details">Details</label>
        <textarea
          rows="5"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        />
        <input
          type="submit"
          value={itemFound ? "Edit Exercise" : "Add Exrcise"}
          className="submit-btn"
        />
      </form>
    </div>
  );
};

export default CreateExercise;
