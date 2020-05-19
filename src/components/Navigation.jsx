import React from 'react'

export default () => {
    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark navbar-bg">
      <div className="container">
        <a className="navbar-brand logo" href="/">Muzykina</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto w-100 justify-content-end">
            <li className="nav-item active">
              <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">Projects</a>
            </li>
         
           
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#about" id="navbarDropdown" role="button" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">
                About me
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="/">Education</a>
                <a className="dropdown-item" href="/">Experience</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="/">Skills</a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
          </ul>

        </div>
      </div>
    </nav>
    )
}