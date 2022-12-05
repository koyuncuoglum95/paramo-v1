import React from "react";
import "./Footer.css";
import Elipse5 from '../../../static/landing/img/ellipse-5@2x.png'
import { SocialIcon} from 'react-social-icons'



function Footer() {
  return (
    <div className="footer">
      <div className="overlap-group-6">
          <div className="social-icons">
            <SocialIcon className='fa' url="https://instagram.com/paramo_world?igshid=YWJhMjlhZTc=" bgColor="#f50780" fgColor="white" style={{ height: 65, width: 65 }} />
            <SocialIcon className='fa' url="https://www.linkedin.com/company/paramo_nft/" bgColor="#0a66c2" fgColor="white" style={{ height: 65, width: 65 }}/>
            <SocialIcon className='fa' url="https://twitter.com/paramolife" bgColor="rgb(29, 155, 240)" fgColor="white" style={{ height: 65, width: 65 }} />
          </div>
      </div>
    </div>
  );
}

export default Footer;
