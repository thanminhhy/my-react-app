function HamTrue() {
  return <div>Greeting "True"</div>;
}

function HamFalse() {
  return <div>Greeting "False"</div>;
}

function Greeting(props) {
  const xx = props.xx;

  if (xx) {
    return <HamTrue />;
  } else {
    return <HamFalse />;
  }
}

export default Greeting;
