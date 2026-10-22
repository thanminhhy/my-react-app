import { useState } from "react";
import api from "./Api";

function DeleteDemo() {
  const [input, setInput] = useState("");
  function handleChange(e) {
    setInput(e.target.value);
  }

  function handleSubmit(e) {
    const data = { id: input };

    e.preventDefault();
    api.delete("users/" + data.id).then((res) => {
      console.log(res);
      console.log(res.data);
    });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Person ID:
          <input
            type="number"
            name="id"
            value={input}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Delete</button>
      </form>
    </>
  );
}

export default DeleteDemo;
