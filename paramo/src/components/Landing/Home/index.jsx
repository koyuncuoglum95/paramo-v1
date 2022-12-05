import React from "react";
import "./Home.css";
import paramoLogo from '../../../static/landing/img/logo-paramo@2x.png'


function Home() {
  return (
    <div className="home">
      <div className="overlap-group7">
        <div className="menu raleway-normal-white-18px">
          <img className="icon-target-1" src={paramoLogo} alt="icon-target" />
          <div className="about-us">About</div>
          <div className="surname">White Paper</div>
          <div className="place-1"><a href="https://airtable.com/shr2sLB6yyiauENF6" style={{color: 'white'}}target='_blank'>Contact</a></div>
        </div>
        <h1 className="paramo-brings-carbon tittles">Paramo brings carbon onsetting closer to end-consumers.</h1>
        <p className="we-believe-in-the-po description">
          {" "}
          We believe in the power of disruptive technologies to create a thriving planet and economy.&nbsp;&nbsp;
          <br />
          As the web shift towards descentralizatrion, and companies become transparent we have created a simple way to
          measure and onset carbon emissions and participate in the regenerative economy
        </p>
        <div className="overlap-group-2">
          <div className="learn-more valign-text-middle description">Learn More</div>
        </div>
      </div>
    </div>
  );
}

export default Home;
