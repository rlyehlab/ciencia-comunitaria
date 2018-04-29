import React, { Component } from 'react';
import { I18n } from 'react-i18next';
import {Route} from 'react-router-dom';

import './assets/style.css';

import Nav from './components/Nav/Nav.jsx';
import Footer from './components/Footer/Footer.jsx';
import Parallax from './components/Parallax/Parallax.jsx';
import Doing from './components/Doing/Doing.jsx';
import Colaborate from './components/Colaborate/Colaborate.jsx';
import Team from './components/Team/Team.jsx';

function wrapWithProps(WrapComponent, nProps) {
  return ()=>(<WrapComponent {...nProps}/>)
}

class Components extends Component {
  getLinks() {
    const {i18n} = this.props;
    const {language} = i18n;
    const links = [];
    ['es', 'en'].forEach(l=>{
      links.push({
        anchor: {
          href: "#",
          className: language === l ? 'disabled btn' : 'btn',
          onClick: (e)=>{
            e.preventDefault();
            this.props.i18n.changeLanguage(l);
          },
          disabled: language === l,
        },
        text: l
      });
    });
    return {links};
  }
  
  render() {
    const {t} = this.props;
    return (
      <div>
        <Nav {...this.getLinks.bind(this)()} t={t}/>
        <Parallax t={t}/>
        <Doing t={t}/>
        <Team t={t}/>
        <Colaborate t={t}/>
        <Footer t={t}/>
      </div>
    );
  }
}

const App = (props) => (
  <div className="App">
    <I18n>
      {(t, {i18n})=>(
        <Route path="/" exact component={wrapWithProps(Components, {t, i18n})}/>
      )}
    </I18n>
  </div>
);

export default App;
