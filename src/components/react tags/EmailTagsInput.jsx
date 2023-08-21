import React, { useState } from "react";
import "react-tagsinput/react-tagsinput.css";
import TagsInput from "react-tagsinput";

const EmailTagsInput = ({ placeholder }) => {
  const [tags, setTags] = useState([]);
  const [currentInput, setCurrentInput] = useState("");

  const isValidEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    console.log(emailPattern.test(email));
    return emailPattern.test(email);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" || e.key === "Tab" || e.key === " ") {
      console.log("entered");

      e.preventDefault();
      const inputValue = e.target.value.trim();

      if (inputValue !== "" && isValidEmail(inputValue)) {
        const newTagList = [...tags, inputValue];
        setTags(newTagList);
        setCurrentInput("");
        e.target.value = "";
      }
    } else if (e.key === "Backspace" && currentInput === "") {
      const newTagList = tags.slice(0, -1);
      setTags(newTagList);
    }
  };

  const handleTagChange = (newTags) => {
    // console.log(
    //   "🚀 ~ file: EmailTagsInput.jsx:46 ~ handleTagChange ~ newTags:",
    //   newTags
    // );
    // const validEmailTags = newTags.filter((tag) => isValidEmail(tag));
    // setTags(validEmailTags);
    setTags(newTags);
  };

  const handleInputChange = (e) => {
    setCurrentInput(e.target.value);
  };

  return (
    <>
      <TagsInput
        addKeys={[9, 13, 32]}
        value={tags}
        inputProps={{
          onChange: handleInputChange,
          placeholder: placeholder,
          onKeyDown: handleKeyPress,
          value: currentInput,
        }}
        onChange={handleTagChange}
        validate={isValidEmail}
      />
     
    </>
  );
};

export default EmailTagsInput;
