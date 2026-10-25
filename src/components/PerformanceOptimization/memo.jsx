import React, { memo, useState } from "react";

const Child = memo(({ count }) => {
  console.log("Child rendered");
  return <div>Count: {count}</div>;
});
function Memo() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  return (
    <div>
      {/* use memo for Child component, it won't be re-rendered when the Memo component re-render
      Child only re-render when props inside its component change */}
      <Child count={count} />
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <input value={text} onChange={(e) => setText(e.target.value)} />
    </div>
  );
}

export default Memo;
