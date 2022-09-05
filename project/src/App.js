import React from 'react';
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import File from './components/File'
import Lyrics from './components/tracks/Lyrics'

import {Provider}  from './context'; 

function App() {
  return (
    <Provider>
    <Router>
      <React.Fragment>
        <Navbar />
        <div className='container'>
          <Routes>
            <Route exact path='/' element= {<File />} />
            <Route exact path='/lyrics/track/:id' element= {<Lyrics />} />
          </Routes>
        </div>
      </React.Fragment>
      </Router>
      </Provider>
  );
}

export default App;
