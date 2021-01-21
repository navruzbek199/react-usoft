import React from 'react';
import './App.css';
import Header from './component/Header/header';
import Home from './views/Home/Home';
import Footer from './component/Footer/footer';
import {BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import './views/Blog/blog.css';
import Blog from './views/Blog/blog';
import Contact from './views/Contact/contact';
import Aboutus from './views/Aboutus/aboutus';
import Link1 from './links/link1/lastlink';
import Linkimg from './links/Linkimg/linkimg';
import Works from './views/Works/works';
import Exercise from './links/Exercise/exercise';
import Bisness from './links/Bisness/bisness';
import { TweenMax  } from 'gsap';
import $ from 'jquery';
import gsap from 'gsap/gsap-core';

function App() {

  

  var cursor = $(".cursor"),
  follower = $(".cursor-follower");
  
  var posX = 0,
      posY = 0;
  
  var mouseX = 0,
      mouseY = 0;
  
  TweenMax.to({}, 0.016, {
    repeat: -1,
    onRepeat: function() {
      posX += (mouseX - posX) / 9;
      posY += (mouseY - posY) / 9;
  
      TweenMax.set(follower, {
          css: {
          left: posX - 12,
          top: posY - 12
          }
      });
  
      TweenMax.set(cursor, {
          css: {
          left: mouseX,
          top: mouseY
          }
      });
    }
  });
  
  $(document).on("mousemove", function(e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
  });
  // yellow circle
  $(".nav-link").on("mouseenter", function() {
      cursor.addClass("active");
      follower.addClass("active");
  });
  $(".nav-link").on("mouseleave", function() {
      cursor.removeClass("active");
      follower.removeClass("active");
  });
  
  return (
    <Router>
    <div className="App">
      <div className="cursor"></div>
        <Header/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/blog">
            <Blog/>
          </Route>
          <Route path="/contact">
            <Contact/>
          </Route>
          <Route path="/aboutus">
            <Aboutus/>
          </Route>
          <Route path="/link1">
            <Link1/>
          </Route>
          <Route path="/linkimg">
            <Linkimg/>
          </Route>
          <Route path="/works">
            <Works/>
          </Route>
          <Route path="/exercise">
            <Exercise/>
          </Route>
          <Route path="/bisness">
            <Bisness/>
          </Route>
        </Switch>
       <Footer/>
    </div>
    </Router>
  );
}

export default App;
