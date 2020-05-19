import React from 'react'

export default () => {
    return(
        <div className="top">
        <div className="container">
          <div className="row">
            <div className="col-4 col-xs-12">
              <p>
                <i className="fa fa-clock"></i>
                Date/Time: <span id="datetime"></span>
              </p>
            </div>
            <div className="col-4">
            </div>
            <div className="col-4 col-xs-12">
              <a href="tel:+380500484731">
                <i className="fa fa-phone"></i>
                <span>+380500484731</span>
              </a>
              <a href="mailto:anna.muzykina83@gmail.com">
                <i className="fa fa-envelope"></i>
                <span>anna.muzykina83@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
}