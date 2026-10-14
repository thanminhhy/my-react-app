import { useState } from "react";

function Test(props) {
  const [getInput, setInput] = useState("");
  const [errE, setErrE] = useState("");
  console.log(getInput);
  function handleInput(e) {
    // e.target.value: lay value nhap vao
    // e.target.id => lay ID
    setInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (getInput == "") {
      setErrE("nhap input");
    } else {
      setErrE("");
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={getInput} onChange={handleInput} />
        <p>{errE}</p>
        <button type="submit">Click</button>
      </form>
    </div>
  );
}

export default Test;
