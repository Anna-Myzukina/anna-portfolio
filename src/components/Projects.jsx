import React from 'react'
// import test from '../assets/img/events.png'
export default () => {
    return (
        <section className="bg-light page-section" id="projects">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Projects</h2>
              <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
            </div>
          </div>
          <div className="row">

              <div className="col-md-4 col-sm-6 portfolio-item">
                        <div className="card">
                            <img src="../assets/img/events.png" class="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
              </div>          
          </div>
              
        </div>
      </section>
    )
}