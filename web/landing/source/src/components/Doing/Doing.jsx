import React from 'react'

import './Doing.css';
import imgSrc from '../../assets/Republica_Frente.jpg';
import mapSrc from '../../assets/bs-map.jpeg';

const Doing = ({t})=>(
  <div className="section section-gray section-clients Doing">
    <div className="container-fluid text-center">
      {/*<h4 className="header-text">{t('home.whatdoing.title')}</h4>*/}
      <div className="row">
        <div className="col-xs-12">
          <p dangerouslySetInnerHTML={{__html: t('home.whatdoing.description')}}></p>
        </div>
        <div className="col-xs-12">
          <div className="image-container">
            <img src={imgSrc} alt="Republica_Frente"/>
            <p style={{marginTop: 10}}><i>{t('home.whatdoing.image-cred')}</i></p>
          </div>
        </div>

        <div className="col-xs-12 col-md-8 col-md-offset-2">
          <p dangerouslySetInnerHTML={{__html: t('home.whatdoing.places')}}></p>
        </div>
        <div className="col-xs-12">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-md-6 col-lg-6">
                <p>{t('home.whatdoing.image-desc')}</p>
              </div>
              <div className="col-xs-12 col-md-6 col-lg-6">
                <div className="image-container">
                  <img src={mapSrc} alt="Buenos Aires"/>
                  {/*<p style={{marginTop: 10}}><i>{t('home.whatdoing.image-cred')}</i></p>*/}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-md-8 col-md-offset-2">
          <p>{t('home.whatdoing.image-desc2')}</p>
        </div>
      </div>
    </div>
  </div>
)

export default Doing