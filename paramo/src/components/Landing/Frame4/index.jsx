import React from "react";
import "./Frame4.css";
import LinkedlnSocial from '../../../static/landing/img/linkedin---original@2x.svg'

function Frame4(props) {
  const { ellipse4, name, className, link } = props;

  return (
    <div className={`frame-4 ${className || ""}`}>
      <img className="ellipse-4" src={ellipse4} alt="Ellipse 4" />
      <p className="name valign-text-middle teamnames">{name}</p>
      <a href={link}><img className="icon-linkedin-1" src={LinkedlnSocial} alt="icon-linkedin" /></a>
    </div>
  );
}

export default Frame4;
