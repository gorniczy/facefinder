import React from "react";

const Image = (props) => {
  return (
    <div className="center">
      <img src={props.imageURL} alt={'processed file'} />
    </div>
  );
};

export default Image;
