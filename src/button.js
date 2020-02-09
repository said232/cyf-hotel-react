import React from "react";
const Button = props => {
  return (
    <div>
      <button className="btn btn-primary" onClick={props.onClick} />
    </div>
  );
};
export default Button;
