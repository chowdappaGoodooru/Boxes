const Box = (props) => {
  //  Write your code here.
  const { BoxText, className } = props;
  return (
    <div className={`box ${className}`}>
      <p>{BoxText}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1>Boxes</h1>
    <div className="bottom-container">
      <Box BoxText="Small" className="small" />
      <Box BoxText="Small" className="medium" />
      <Box BoxText="Small" className="large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
