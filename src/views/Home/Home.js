import React from 'react';
import Topic from '../../container/Topic/topic';
import Servis from '../../container/Servis/index';
import Project from '../../container/Project/project';
import Slidetext from '../../container/Slidetext/slidetext';



function Home() {
  
  return (
    <div className="App">
        <Topic/>
        <Servis/>
        <Project/>
        <Slidetext/>
    </div>
  );
}

export default Home;
