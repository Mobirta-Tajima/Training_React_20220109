import React from "react";

const ColorfulMessage = (props) => {
  // const {color, children} = props;
  // console.log(props);
  const contentStyle = {
    color: props.color
    // fontSize: "18px"
  };

  return <p style={contentStyle}>{props.children}</p>;
};

export default ColorfulMessage;
