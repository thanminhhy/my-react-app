import { useState } from "react";

function Textarea(props) {
  const [getContent, setContent] = useState("");
  const [errE, setErrE] = useState("");
  console.log(getContent);
  function handleInput(e) {
    setContent(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (getContent == "") {
      setErrE("nhap content");
    } else {
      setErrE("");
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={getContent} onChange={handleInput}></input>
        <p>{errE}</p>
        <button type="submit">Click</button>
      </form>
    </div>
  );
}

export default Textarea;
