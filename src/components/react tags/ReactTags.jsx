import React from "react";
import "./style.css";
import EmailTagsInput from "./EmailTagsInput";

const ReactTags = () => {
  return (
    <div className="mainCon">
      <div className="container-xl tagCon">
         
         <h1>Input Tags</h1>

        <div className="inputLabelWrapper">
          <label htmlFor="Add Guests">Add Guests </label>
          <EmailTagsInput placeholder={"Add a mail"} />
        </div>

      </div>
    </div>
  );
};

export default ReactTags;
