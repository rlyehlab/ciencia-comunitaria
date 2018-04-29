import React from 'react'

import rlyeh from '../../assets/Rlyeh.jpg';
import aerocene from '../../assets/aerocene-logo.jpg';
import mzLogo from '../../assets/mz-logo.png';
import unsamLogo from '../../assets/unsam-logo.png';
import eterLogo from '../../assets/logo.svg';

const LOGOS = [
  {
    src: rlyeh, href: "https://rlab.be"
  }, 
  {
    src: aerocene, href: "http://aerocene.org"
  }, 
  {
    src: mzLogo, href: "https://science.mozilla.org"
  }, 
  {
    src: unsamLogo, href: "http://www.unsam.edu.ar/"
  }, 
  {
    src: eterLogo, href: "#"
  }
];

const socialStyles = {
  height: 100,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around"
};

const anchorStyles = {
  padding: 0, 
  display: "inline-block", 
  height: "100%"
};

const Footer = ()=>(
  <footer className="footer">
    <div className="container">
      <div className="social-area" style={socialStyles}>
        {LOGOS.map(({src, href="#"},i)=>
          <a href={href} 
            target="_blank" 
            key={i.toString()} 
            style={anchorStyles}>
            <img className="image-h-responsive" src={src} alt="logo"/>
          </a>
        )}
      </div>
    </div>
  </footer>
)

export default Footer