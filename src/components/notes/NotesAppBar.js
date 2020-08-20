import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { startSaveNote, startUploading } from "../actions/notes";
import moment from "moment";

export const NotesAppBar = () => {
  const dispatch = useDispatch();

  const { active } = useSelector((state) => state.notes);

  const handleSave = () => {
    dispatch(startSaveNote(active));
  };

  const handlePictureClick = () => {
    document.querySelector("#fileselector").click();
  };

  const noteDate = moment(active.date).format("MMM Do YY");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      dispatch(startUploading(file));
    }
  };

  return (
    <div className="notes__appbar">
      <span>{noteDate}</span>

      <input
        id="fileselector"
        type="file"
        name="file"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
      <div>
        <button onClick={handlePictureClick} className="btn">
          Picture
        </button>
        <button onClick={handleSave} className="btn">
          Save
        </button>
      </div>
    </div>
  );
};
