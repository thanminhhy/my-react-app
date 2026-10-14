function ArrayMap(props) {
  function renderData() {
    let { arr = [] } = props;

    if (arr.length > 0) {
      return arr.map((value, key) => {
        return <li key={key}>{value}</li>;
      });
    }

    return null;
  }

  return (
    <div>
      <p>Map theo Array</p>
      <ul>{renderData()}</ul>
    </div>
  );
}

export default ArrayMap;
