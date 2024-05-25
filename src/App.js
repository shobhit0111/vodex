import React from 'react'
import {Routes,  Route} from 'react-router-dom'
import Home1 from './Components/Home1/Home1'
import Home2 from './Components/Home2/Home2'
import Dashboard from './Components/Dashboard.js/Dashboard'
export default function App() {
  return (
     <>
      <Routes>
        <Route path='/' Component={Home1}/>
        <Route path='/home2' Component={Home2}/>
        <Route path='/dashboard' Component={Dashboard}/>
      </Routes>
      </>
    );
}
