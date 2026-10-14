function NumberList(props) {
  const xx = props.arr;
  const listItems = xx.map((value) => {
    return <li key={value.toString()}>{value}</li>;
  });
  return <ul>{listItems}</ul>;
}

function ListAndKey() {
  const numbers = [1, 2, 3, 4, 5];
  // const doubled = numbers.map((number) => {
  //   return number * 2;
  // });
  const listItems = numbers.map((number) => {
    return <li>{number}</li>;
  });
  return <ul>{listItems}</ul>;
}

export default NumberList;
