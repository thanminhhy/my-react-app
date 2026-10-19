import { useState } from "react";

function Login(props) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const [errorEmail, setErrorEmail] = useState("");
  const [errorPass, setErrorPass] = useState("");
  console.log(email, pass);
  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handlePass(e) {
    setPass(e.target.value);
  }

  function handleForm(e) {
    e.preventDefault();
    if (email == "") {
      setErrorEmail("Vui lòng nhập email");
    } else {
      setErrorEmail("");
    }
    if (pass == "") {
      setErrorPass("Vui lòng nhập pass");
    } else {
      setErrorPass("");
    }
  }

  return (
    <form onSubmit={handleForm}>
      <label>Email: </label>
      <input type="text" value={email} onChange={handleEmail} />
      <p>{errorEmail}</p>
      <br />
      <label>Password: </label>
      <input type="password" value={pass} onChange={handlePass} />
      <p>{errorPass}</p>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Login;
