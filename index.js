const Box = (props) => {
  //  Write your code here.
  const { className, name } = props;
  return (
    <div className={`${className}`}>
      <p className="para">{name}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="bg-cont">
    <div className="inner-1">
      <h1 className="box-head">Boxes</h1>
      <div className="boxes-cont">
        <Box className="small" name="Small" />
        <Box className="medium" name="Medium" />
        <Box className="large" name="Large" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
