import './App.css';
import './Components/Style.css';
import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './Components/Navbar';
import { Home } from './Components/Home';
import { Footer } from './Components/Footer';
import { Bags } from './Components/Bags';
import { Sneakers } from './Components/Sneakers';
import { Belt } from './Components/Belt';
import { Contact } from './Components/Contact';


function App() {
   
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/bags' element={<Bags/>}/>
            <Route path='/sneakers' element={<Sneakers/>}/>
            <Route path='/belt' element={<Belt/>}/>
            <Route path='/contact' element={<Contact/>}/>
        </Routes>
        <Footer/>
     </BrowserRouter>
    </div>
  );
}

export default App;
