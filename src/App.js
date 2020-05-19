import React from 'react';
//import logo from './logo.svg';
import Project from './components/Project'
import './App.css';
import Navigation from './components/Navigation';
import Header from './components/Header';
import About from './components/About';
import Contacts from './components/Contacts';
import Footer from './components/Footer';

function App() {

  return (
    <div className="App">
     <Top></Top>
     <Navigation></Navigation>
     <Header></Header>
     <Projects></Projects>
     <About></About>
     <Contacts></Contacts>
     <Footer></Footer>
  
    </div>
  );
}

export default App;
