import React from 'react';

import svgLogo from '../../assets/logo.svg';

const Colaborate = ({t})=>(
  <div className="section section-gray section-clients Colaborate">
    <div className="container-fluid text-center">
      <h4 className="header-text">{t('home.help.title')}</h4>
      <div className="row">
        <div className="col-xs-12">
          <p>
            <span>{t('home.help.subtitle')}</span>
            <span style={{display: "inline-block", height: "1.7em"}}>
              <a href="https://github.com/rlyehlab/eter" target="_blank" rel="noopener noreferrer">
                <img src={svgLogo} className="image-h-responsive" alt="Github Eter"/>
              </a>
            </span>
          </p>
        </div>
        <div className="col-xs-10 col-xs-offset-1 col-md-8 col-md-offset-2">
          <p dangerouslySetInnerHTML={{__html: t('home.help.details')}}></p>
        </div>
        <div className="col-xs-10 col-xs-offset-1 col-md-8 col-md-offset-2">
          <p dangerouslySetInnerHTML={{__html: t('home.help.contact')}}></p>
        </div>
      </div>
    </div>
  </div>
)

export default Colaborate