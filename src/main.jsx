
import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import App from './App.jsx'
import './index.css'
import Help from './components/Help.jsx'
import Contact from './components/Contact.jsx';
import Fullgame from './components/Fullgame.jsx';
import Playing from './components/Playing.jsx';
import Chase from './components/Chase.jsx';
import Defend from './components/Defend.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/help",
    element: <Help/>
  },
  {
    path: "/contact",
    element: <Contact/>
  },
  {
    path: "/playfullgame",
    element: <Playing/>
  },
  {
    path: "/chasetarget",
    element: <Chase/>
  },
  {
    path: "/defendtarget",
    element: <Defend/>
  },
  {
    path: "/playtoss",
    element: <Fullgame/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='/HandCricket'>
    <Routes>
      <Route path='/' element = {<App/>} />
      <Route path= "/help" element= {<Help/>}/>
      <Route path= "/chasetarget" element= {<Chase/>}/>
      <Route path= "/defendtarget" element= {<Defend/>}/>
      <Route path= "/playfullgame" element= {<Playing/>}/>
      <Route path= "/playtoss" element= {<Fullgame/>}/>
      <Route path= "/contact" element= {<Contact/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
