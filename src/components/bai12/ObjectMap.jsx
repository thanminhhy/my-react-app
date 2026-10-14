function ObjectMap(props) {
  function renderObjData() {
    let { obj = {} } = props;

    if (Object.keys(obj).length > 0) {
      return Object.keys(obj).map((key, index) => {
        return <li key={key}>{obj[key]}</li>;
      });
    }
    return null;
  }

  return (
    <div>
      <p>Map theo Object</p>
      <ul>{renderObjData()}</ul>
    </div>
  );
}

export default ObjectMap;
