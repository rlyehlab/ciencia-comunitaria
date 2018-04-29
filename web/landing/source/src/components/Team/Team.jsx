import React from 'react';

import teamImg from '../../assets/team.jpg';

const imgStyles = {
  // maxWidth: '100%',
  // width: '100%',
  // height: 'auto',
  position: 'inherit'
};

const Team = ({t})=>(
  <div className="Team section section-presentation">
    <div className="row">
      <div className="col-xs-10 col-xs-offset-1 col-md-8 col-md-offset-2">
        <div className="row">
          <div className="col-md-6">
            <div className="description">
              <h4 className="header-text">{t('home.team.title')}</h4>
              <p dangerouslySetInnerHTML={{__html: t('home.team.details')}}></p>
              <p dangerouslySetInnerHTML={{__html: t('home.team.description')}}></p>
            </div>
          </div>
          <div className="col-md-6 hidden-xs">
            <img src={teamImg} style={imgStyles} alt="team" className="image-h-responsive" />
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Team