import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News'
// require('dotenv').config()
import {  BrowserRouter as Router, Route, Routes } from "react-router-dom"
import LoadingBar from 'react-top-loading-bar'

const App = () => {
  const pageSize = 25;
  const apiKey = process.env.REACT_APP_NEWSAPP
  // chk = process.env.REACT_APP_NEWSAPP

  const [progress, setProgress] = useState(0);
    // console.log(process.env.REACT_APP_NEWSAPP);
    return (
      
      <Router>
        <div>
          <Navbar/>
          <LoadingBar
          height={3}
            color='#f11946'
            progress={progress}
            
          />
          
          <Routes>
            <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey}  key="general" pageSize={pageSize} country="in" category="general"/>} />
            <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey}  key="business" pageSize={pageSize} country="in" category="business"/>} />
            <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey}  key="entertainment" pageSize={pageSize} country="in" category="entertainment"/>} />
            <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey}  key="health" pageSize={pageSize} country="in" category="health"/>} />
            <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey}  key="sience" pageSize={pageSize} country="in" category="science"/>} />
            <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey}  key="sports" pageSize={pageSize} country="in" category="sports"/>} />
            <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey}  key="technology" pageSize={pageSize} country="in" category="technology"/>} />
          </Routes>
        </div>
      </Router>
    )
}

export default App