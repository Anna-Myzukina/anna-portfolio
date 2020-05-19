import React from 'react';
//import logo from './logo.svg';
import Portfolio from './components/Portfolio'
import './App.css';

function App() {
  const portfolioLinks = [
    {
      title: 'Threads',
      caption: 'Illustration'
    },
    {
      title: 'Explore',
      caption: 'Graphic Design'
    },
    {
      title: 'Finish',
      caption: 'Identity'
    },
    {
      title: 'Lines',
      caption: 'Branding'
    },
    {
      title: 'Southwest',
      caption: 'Website Design'
    },
    {
      title: 'Window',
      caption: 'Photography'
    },
    {
      title: 'Pizza',
      caption: 'I love pizza!'
    }
  ]
  return (
    <div className="App">
     <div class="top">
      <div class="container">
        <div class="row">
          <div class="col-4 col-xs-12">
            <p>
              <i class="fa fa-clock"></i>
              Date/Time: <span id="datetime"></span>
            </p>
          </div>
          <div class="col-4">
          </div>
          <div class="col-4 col-xs-12">
            <a href="tel">
              <i class="fa fa-phone"></i>
              <span>+3805005050</span>
            </a>
            <a href="tel">
              <i class="fa fa-envelope"></i>
              <span>contact@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
    </div>
    <nav class="navbar sticky-top navbar-expand-lg navbar-dark navbar-bg">
      <div class="container">
        <a class="navbar-brand logo" href="#">Muzykina</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto w-100 justify-content-end">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Projects</a>
            </li>
         
           
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">
                About me
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">Education</a>
                <a class="dropdown-item" href="#">Experience</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Skills</a>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Gallery</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contact</a>
            </li>
          </ul>

        </div>
      </div>
    </nav>
    <header class="header-section">
    <div class="container">
      <div class="intro-text">
        <div class="intro-lead-in">Anna Muzykina</div>
        <div class="intro-heading text-uppercase">Web developer</div>
        <a class="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">I like creative... what about U?</a>
      </div>
    </div>
  </header>

  <Portfolio portfolioLinks={portfolioLinks}></Portfolio>

  <section className="page-section" id="about">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">About</h2>
          <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <ul className="timeline">
            <li>
              <div className="timeline-image">
                <img className="rounded-circle img-fluid" src="img/about/1.jpg" alt=""/>
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>2009-2011</h4>
                  <h4 className="subheading">Our Humble Beginnings</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image">
                <img className="rounded-circle img-fluid" src="img/about/2.jpg" alt=""/>
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>March 2011</h4>
                  <h4 className="subheading">An Agency is Born</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                </div>
              </div>
            </li>
            <li>
              <div className="timeline-image">
                <img className="rounded-circle img-fluid" src="img/about/3.jpg" alt=""/>
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>December 2012</h4>
                  <h4 className="subheading">Transition to Full Service</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image">
                <img className="rounded-circle img-fluid" src="img/about/4.jpg" alt=""/>
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>July 2014</h4>
                  <h4 className="subheading">Phase Two Expansion</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image">
                <h4>Be Part
                  <br/>Of Our
                  <br/>Story!</h4>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>

<section class="map">
        <div class="box">
            <div>
                <span>Lorem</span>
                <span>Lorem</span>
                <span>Lorem</span>
                <span>Lorem</span>
            </div>
        </div>
</section>

  <footer className="footer">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-4">
          <span className="copyright">Copyright &copy; Anna Muzykina 2020</span>
        </div>
        <div className="col-md-4">
          <ul className="list-inline social-buttons">
            <li className="list-inline-item">
              <a href="https://twitter.com/AnnaMuzykina" target="_blank">
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://www.facebook.com/AnnMuzykina" target="_blank">
                <i className="fa fa-facebook-f"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://www.linkedin.com/in/anna-muzykina/" target="_blank">
                <i className="fa fa-linkedin-in"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md-4">
          <ul className="list-inline quicklinks">
            <li className="list-inline-item">
              <a href="#something" target="_blank">License</a>
            </li>
      
          </ul>
        </div>
      </div>
    </div>
  </footer>
  
    </div>
  );
}

export default App;
