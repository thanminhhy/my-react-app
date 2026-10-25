import { useState, useRef } from "react";
import LogoutButton from "./button/LogoutButton";
import LoginButton from "./button/LoginButton";

//3. Tạo component Login
function Login() {
  const [isLogin, setIsLogin] = useState(false);
  const emailRef = useRef(); //Tạo ref
  function handleLogoutClick() {
    setIsLogin(!isLogin);
  }

  function handleLoginClick() {
    console.log(emailRef.current.value);
    setIsLogin(!isLogin);
  }
  function renderButton() {
    let form;
    if (isLogin) {
      form = <LogoutButton onClick={handleLogoutClick} />;
    } else {
      form = <LoginButton onClick={handleLoginClick} emailRef={emailRef} />;
    }

    //****Note: an element variable is simply a javascript variable that stores a react element
    //for example: button is a js variable that stores two react elements are <LogoutButton/> and <LoginButton/>
    //components will return react element such as <div>Login</div> or <button>Login</button>
    return form;
  }
  return <div className="App">{renderButton()}</div>;
}

export default Login;
