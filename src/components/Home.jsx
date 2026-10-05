import { useState } from "react";
function Home() {
  const [isToggle, setIsToggle] = useState(true);

  function handleClick() {
    setIsToggle(!isToggle);
  }
  // 1. Sau khi chạy npm install --save react-router-dom thì tạo component Home
  return (
    <div className="App">
      Home
      <button onClick={handleClick}>{isToggle ? "ON" : "OFF"}</button>
    </div>
  );
}

export default Home;
