import React from "react";

const ChildrenMap = ({ children }) => {
  // iterate over the children

  const modifiedComponent = React.Children.map(children, (child, index) => {
    // wrap each child inside <h1> and add a key/
    return (
      <>
        <h1 key={index}>{child}</h1>{" "}
      </>
    );
  });
  return <div>{modifiedComponent}</div>;
};

export default ChildrenMap;
