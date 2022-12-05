import React from "react";
import "./Group27.css";

function Group27(props) {
  const { spanText1, fullName, className } = props;

  return (
    <div className={`group-27 ${className || ""}`}>
      <div className="full-name valign-text-middle description">
        <span>
          <span className="span0-1 description">{spanText1}</span>
          <span className="span1-1 description">*</span>
        </span>
      </div>
      <div className="overlap-group-5">
        <div className="full-name-1 valign-text-middle raleway-normal-sonic-silver-18px">{fullName}</div>
      </div>
    </div>
  );
}

export default Group27;
