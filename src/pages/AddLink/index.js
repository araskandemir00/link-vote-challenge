import React, { useState } from "react";
import { faLeftLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { addLinkItems } from "../../ls-service/linkService";
import { useToast } from "../../context/ToastContext";
import "./addLink.scss";

const Add = () => {
  const initialState = {
    linkName: "",
    linkUrl: "",
  };
  const [state, setState] = useState(initialState);

  const toastContext = useToast();

  let navigate = useNavigate();

  const handleChange = (e, key) => {
    setState((prevState) => {
      return { ...prevState, [key]: e.target.value };
    });
  };

  const addLink = () => {
    if (!state.linkName || !state.linkUrl) {
      toastContext.showToast("error", "Please fill necessary parameters");
      return;
    }
    const serviceResponse = addLinkItems(state.linkName, state.linkUrl);

    if (serviceResponse) {
      toastContext.showToast(
        "success",
        `<span>${state.linkName}</span> <span>added</span>`
      );
      setState(initialState);
    } else {
      toastContext.showToast(
        "error",
        "The Url is missing/wrong, please try again."
      );
    }
  };

  return (
    <div className="add">
      <div className="nav">
        <button onClick={() => navigate("/list")}>
          <FontAwesomeIcon icon={faLeftLong} />
          <span>Return to List</span>
        </button>
      </div>

      <span className="title">Add New Link</span>

      <div className="form">
        <div className="form-item">
          <label htmlFor="linkName">Link Name</label>
          <input
            type="text"
            id="linkName"
            name="linkName"
            placeholder="e.g. Alphabet"
            value={state.linkName}
            onChange={(e) => handleChange(e, "linkName")}
          />
        </div>

        <div className="form-item">
          <label htmlFor="linkUrl">Link linkUrl</label>
          <input
            type="text"
            id="linkUrl"
            name="linkUrl"
            placeholder="e.g. http://abc.xyz"
            value={state.linkUrl}
            onChange={(e) => handleChange(e, "linkUrl")}
          />
        </div>

        <button data-testid="add" className="add-btn" onClick={addLink}>
          Add
        </button>
      </div>
    </div>
  );
};

export default Add;
