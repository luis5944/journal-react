import React, { useEffect, useRef } from "react";
import { NotesAppBar } from "./NotesAppBar";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "../../hooks/useForm";
import { activeNotes, startDeleting } from "../actions/notes";

export const NoteScreen = () => {
  const dispatch = useDispatch();
  //Referencia a la nota activa (la renombramos)
  const { active: note } = useSelector((state) => state.notes);

  //utilizamos el custom hook y cogemos toda la informacion de la nota activa
  const [formValues, handleInputChange, reset] = useForm(note);

  const activeId = useRef(note.id);
  useEffect(() => {
    if (note.id !== activeId.current) {
      reset(note);
      activeId.current = note.id;
    }
  }, [note, reset]);

  const { body, title, id } = formValues;

  useEffect(() => {
    dispatch(activeNotes(formValues.id, { ...formValues }));
  }, [formValues, dispatch]);

  const handleDelete = () => {
    dispatch(startDeleting(id));
  };
  return (
    <div className="notes__main-content">
      <NotesAppBar />
      <div className="notes__content">
        <input
          type="text"
          name="title"
          placeholder="Title"
          className="notes__title-input"
          autoComplete="off"
          value={title}
          onChange={handleInputChange}
        ></input>

        <textarea
          name="body"
          placeholder="Tell me your day"
          className="notes__textarea"
          value={body}
          onChange={handleInputChange}
        ></textarea>
      </div>
      {note.url && (
        <div className="notes__image">
          <img src={note.url} alt="imagen" />
        </div>
      )}

      <button className="btn btn-danger" onClick={handleDelete}>
        {" "}
        Delete
      </button>
    </div>
  );
};
