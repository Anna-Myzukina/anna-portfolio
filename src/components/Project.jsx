import React from 'react'

export default ({ projectLinks }) => {
    return (
        <section className="bg-light page-section" id="project">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Projects</h2>
              <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
            </div>
          </div>
          <div className="row">
            {
                projectLinks && projectLinks.map(({ title, caption }, index) => 
                    <div className="col-md-4 col-sm-6 project-item">
                        <a className="project-link" data-toggle="modal" href="#projectModal1">
                            <div className="project-hover">
                                <div className="project-hover-content">
                                    <i className="fa fa-plus fa-3x"></i>
                                </div>
                            </div>
                            <img className="img-fluid" src={ `https://unsplash.it/350/140/?${Math.floor(Math.random(0,100) * 100)}` } alt="project_img" />
                        </a>
                        <div className="project-caption">
                            <h4>{ title }</h4>
                            <p className="text-muted">{ caption }</p>
                        </div>
                    </div>
                )
            }
          </div>
        </div>
      </section>
    )
}