import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import Netflix from './components/Netflix/Netflix';

const App: React.FunctionComponent = () => {
  return (
   <BrowserRouter basename={process.env.PUBLIC_URL}>

        <Routes>
            <Route path='/' Component={ Login }/>
            <Route path='/Netflix' Component={ Netflix }/> 
        </Routes>
    
   </BrowserRouter>
  );
}

export default App;
