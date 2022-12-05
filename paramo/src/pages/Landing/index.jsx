import React from "react";
import Home from "../../components/Landing/Home";
import Frame4 from "../../components/Landing/Frame4";
import Frame7 from "../../components/Landing/Frame7";
import Footer from "../../components/Landing/Footer";

import "./Landing.css";
import LinkedlnSocial from '../../static/landing/img/linkedin---original-4@2x.svg';
import x3DBoxUp from '../../static/landing/img/vector@2x.svg';
import x3DBoxDown from '../../static/landing/img/-vector-83--needs-to-be-a-rasterized-image@2x.svg';
import textShape from '../../static/landing/img/shape-with-text-1@2x.svg';
import boxhero from '../../static/landing/img/boxhero.png';
import hashtat from '../../static/landing/img/hashtat.png';
import onseetting from '../../static/landing/img/onsetting.png';
import tokenss from '../../static/landing/img/tokens.png';
import regenerative from '../../static/landing/img/regenerative.png';



function Landing({ data }) {
  const {
    whatWeDo,
    onsetting,
    empowerOrganization,
    x3D_Box,
    tokens,
    buildingNftTokens,
    regeneration,
    wePartnerWithProj,
    exploreProjects,
    howWeDoIt,
    weHelpClientsDeca,
    overlapGroup,
    wouldYouLikeToC,
    yes,
    iconTarget,
    place,
    iWantToLearMoreAboutParamo,
    meetTheTeam,
    myEmoji1,
    mehmetKoyuncuogluProductManager,
    frame41Props,
    frame42Props,
    frame7Props,
    newsletterProps,
  } = data;

  return (
    <div className="container-center-horizontal">
      <div className="landing screen">
        <Home />
        <div className="about">
          <div className="what-we-do valign-text-middle tittles">{whatWeDo}</div>
          <div className="overlap-group-container">
            <div className="overlap-group5">
              <div className="frame-1">
                <img className="vector" src={onseetting} alt="Vector" />
              </div>
              <div className="onsetting valign-text-middle raleway-bold-black-24px">{onsetting}</div>
              <p className="empower-organization valign-text-middle description">{empowerOrganization}</p>
            </div>
            <div className="overlap-group">
              <div className="frame-2">
                <img className="x3d_box" src={tokenss} alt="3d_box" />
              </div>
              <div className="tokens valign-text-middle raleway-bold-black-24px">{tokens}</div>
              <p className="building-nft-tokens valign-text-middle description">{buildingNftTokens}</p>
            </div>
            <div className="overlap-group">
              <div className="frame-3">
                <img
                  className="vector-83-needs-to-be-a-rasterized-image"  
                  src={regenerative}
                  alt="Vector 83&#34; needs to be a rasterized image"
                />
              </div>
              <div className="regeneration valign-text-middle raleway-bold-black-24px">{regeneration}</div>
              <p className="we-partner-with-proj valign-text-middle description">{wePartnerWithProj}</p>
            </div>
          </div>
          <div className="overlap-group2">
            <div className="explore-projects description">{exploreProjects}</div>
          </div>
          <div className="overlap-group6">
            <div className="flex-col">
              <div className="how-we-do-it valign-text-middle tittles">{howWeDoIt}</div>
              <p className="we-help-clients-deca description">{weHelpClientsDeca}</p>
            </div>
            <div className="group-31">
              <div className="overlap-group1">
                <img className="shape-with-text" src={textShape} alt="Shape with text" />
              </div>
              <div className="overlap-group-1" style={{ backgroundImage: `url(${overlapGroup})` }}>
                <p className="would-you-like-to-c">{wouldYouLikeToC}</p>
                <div className="flex-row">
                  <div className="yes">{yes}</div>
                  <img className="icon-target" src={iconTarget} alt="icon-target" />
                </div>
                <div className="place">{place}</div>
                <a href="https://ethglobal.com/showcase/paramo-ysjdm" target="_blank">
                  <p className="i-want-to-lear-more-about-paramo">{iWantToLearMoreAboutParamo}</p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="team">
          <div className="meet-the-team valign-text-middle tittles">{meetTheTeam}</div>
          <div className="frame-container">
            <Frame4 ellipse4={frame41Props.ellipse4} name={frame41Props.name} link="https://www.linkedin.com/in/danicamidelga/" />
            <Frame4 ellipse4={frame42Props.ellipse4} name={frame42Props.name} className={frame42Props.className} link="https://www.linkedin.com/in/andrea-camargo-35466856/" />
            <div className="frame-8">
              <img className="my-emoji-1" src={myEmoji1} alt="my emoji 1" />
              <a href="https://www.linkedin.com/in/mehmet-koyuncuoglu-28b607175/"><img className="icon-linkedin" src={LinkedlnSocial} alt="icon-linkedin" /></a>
              <div className="mehmet-koyuncuoglu-product-manager valign-text-middle teamnames">
                {mehmetKoyuncuogluProductManager}
              </div>
            </div>
          </div>
          <div className="frame-container-1">
            <Frame7 className={frame7Props.className} image={hashtat} name="Tatsuya Hashimoto" role="Project Manager" link="https://www.linkedin.com/in/hashtat0226/" />
            <Frame7 className={frame7Props.className} image={boxhero} name="Xinbo Tian" role="IT Manager" link="https://www.linkedin.com/in/xinbo-tian/" />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Landing;
