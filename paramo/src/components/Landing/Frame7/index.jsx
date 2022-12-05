import React from "react";
import "./Frame7.css";
import LinkedlnSocial from '../../../static/landing/img/linkedin---original-2@2x.svg';

function Frame7(props) {
  const { className, image, name, role, link } = props;

  return (
    <div className={`frame-6 ${className || ""}`}>
      <img className="ellipse-4-1" src={image} alt="Ellipse 4" />
      <div className="name-rol valign-text-middle teamnames">
        {name}
        <br />
        {role}
      </div>
      <a href={link}><img className="icon-linkedin-2" src={LinkedlnSocial} alt="icon-linkedin" /></a>
    </div>
  );
}

export default Frame7;
