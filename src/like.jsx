import React from "react";

const Like = (props) => {
  let classes = "bi bi-heart";
  if (props.liked) classes += "-fill";
  return (
    <i
      onClick={props.onClick}
      style={{ cursor: "pointer" }}
      className={classes}
      aria-hidden="true"
    ></i>
  );
};

export default Like;
