import React from 'react'

import logo from '../../assets/logo.svg'

const Nav = ({links})=> (
  <nav className="navbar navbar-transparent navbar-top">
    <div className="container">
      <div className="navbar-header">
        <button id="menu-toggle" type="button" className="navbar-toggle" data-toggle="collapse" data-target="#example">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar bar1" />
          <span className="icon-bar bar2" />
          <span className="icon-bar bar3" />
        </button>
        <a href="https://github.com/rlyehlab/eter">
          <div className="logo-container">
            <div className="logo" style={{border: "none"}}>
              <img src={logo} alt="Eter" />
            </div>
            {/*<div className="brand">
              Eter
            </div>*/}
          </div>
        </a>
      </div>
      <div className="collapse navbar-collapse" id="example">
        {links ? 
        (<ul className="nav navbar-nav navbar-right">
          {links.map(({icon, anchor, text},i)=>(
            <li key={i.toString()}>
              <a {...anchor}>
                {icon ? <i className={"fa "+icon} /> : null}
                {text}
              </a>
            </li>
          ))}
        </ul>)
        : null}
      </div>
    </div>
  </nav>
)

export default Nav