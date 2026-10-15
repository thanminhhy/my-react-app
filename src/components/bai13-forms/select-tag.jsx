import { useState } from "react";

function Select(props) {
  const [getInput, setInput] = useState("");
  const [errE, setErrE] = useState("");

  function handleInput(e) {
    setInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (getInput == "") {
      setErrE("Vui long chon");
    } else {
      setErrE("");
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <select value={getInput} onChange={handleInput}>
          <option value="">Vui Long Chon</option>
          <option value="1">Female</option>
          <option value="2">Male</option>
        </select>
        <p>{errE}</p>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Select;
