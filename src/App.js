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



function App() {


  
  return (
    <Router>
    <div className="App">
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
