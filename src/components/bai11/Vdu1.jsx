import Greeting from "./Greeting";
import { useState } from "react";
import Toggle from "../button/Toggle";

function Vdu1() {
  const [isToggle, setIsToggle] = useState(true);

  function handleToggle() {
    console.log("Đã bấm nút, giá trị cũ", isToggle);
    setIsToggle(!isToggle);
  }
  return (
    <div>
      <Toggle isToggle={isToggle} onToggle={handleToggle} />
      <Greeting xx={isToggle} />
    </div>
  );
}
export default Vdu1;
