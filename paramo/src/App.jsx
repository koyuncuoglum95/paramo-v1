import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing/index';
import Globe from './pages/WorldGlobe/WorldGlobe';
import Ellipse41 from './static/landing/img/ellipse-4@2x.png';
import Ellipse42 from './static/landing/img/ellipse-4-1@2x.png';
import X3DBox from './static/landing/img/3d-box@1x.png';
import target from './static/landing/img/logo@2x.png';
import emoji1 from './static/landing/img/my-emoji-1@2x.png'
import lapGroup from './static/landing/img/screenshot-2022-11-19-at-7-00-1@1x.png';


function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing data={landingData}/>}/>
          <Route path='/globe' element={<Globe />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App


const frame41Data = {
  ellipse4: Ellipse41,
  name: <React.Fragment>Daniel Camilo Delgado Moreno<br />Business Development Manager</React.Fragment>,
};

const frame42Data = {
  ellipse4: Ellipse42,
  name: <React.Fragment>Andrea Camargo<br />Marketing Manager</React.Fragment>,
  className: "frame-5",
};

const frame72Data = {
  className: "frame",
};

const group271Data = {
  spanText1: "Full Name ",
  fullName: "Full Name",
};

const group272Data = {
  spanText1: "Email Address ",
  fullName: "Email Address",
  className: "group-28",
};

const newsletterData = {
  group271Props: group271Data,
  group272Props: group272Data,
};

const landingData = {
  whatWeDo: "What we do",
  onsetting: "Onsetting",
  empowerOrganization: "Empower organizations and end-consumers to balance their carbon footprint with just one click",
  x3D_Box: X3DBox,
  tokens: "Tokens",
  buildingNftTokens: "Develop personalized Non Fungible Tokens to verify carbon onsets and provide a proof of contribution",
  regeneration: "Regeneration",
  wePartnerWithProj: "We partner with projects commited to remove carbon from the atmosphere and sequester for long periods of time",
  exploreProjects: "EXPLORE PROJECTS",
  howWeDoIt: "How we do it",
  weHelpClientsDeca: <React.Fragment>We help clients decarbonize their businesses and accelerate the transition to regenerative economy.<br /><br />Just add Paramo’s “contribute” button to the fiinal  step of your customer’s checkout flow, so they can voluntarily clean the carbon footprint of their purchase.<br /><br />We then create an NFT to validate and record the contribution as proof for supporting high-impact regenerative projects globally.</React.Fragment>,
  overlapGroup: lapGroup,
  wouldYouLikeToC: "¿Would you like to contribute with $ 1.10 to reduce the carbon footprint of your purchase?",
  yes: "Yes",
  iconTarget: target,
  place: "No",
  iWantToLearMoreAboutParamo: "I want to learn more about PARAMO",
  meetTheTeam: "Meet the team",
  myEmoji1: emoji1,
  mehmetKoyuncuogluProductManager: <React.Fragment>Mehmet Koyuncuoglu<br />Product Manager</React.Fragment>,
  frame41Props: frame41Data,
  frame42Props: frame42Data,
  frame7Props: frame72Data,
  newsletterProps: newsletterData,
};


