import React from 'react';
import './Nav.css';
import {Link,Route,Routes,BrowserRouter} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Login from './Login';
import Register from './Register';
import Contact from './Contact';
import Portfolio from './Portfolio';
import cart from '../src/Assets/cart.png';

export default function Nav() {
    return(
        <>
        
        <BrowserRouter>
           <div className="header">
           <img src={cart} alt="" style={{width:'40px',height:'40px',borderRadius:'50%',}}/>
            <span class="logo">Beauty</span>
             <nav className='navbar'>
                <ul>
                    <li><Link to="/Home" style={{textDecoration:'none',color:'#fff'}}>Home</Link></li>
                    <li><Link to="/About" style={{textDecoration:'none',color:'#fff'}}>About</Link></li>
                    <li><Link to="/Contact" style={{textDecoration:'none',color:'#fff'}}>Contact</Link></li>
                    <li><Link to="/Register" style={{textDecoration:'none',color:'#fff'}}>Products</Link></li>
                    <li><Link to="/Login" style={{textDecoration:'none',color:'#fff'}}>Login</Link></li>
                    <li><Link to="/Portfolio" style={{textDecoration:'none',color:'#fff',gap:'45px'}}>Portfolio</Link></li>
                    
                    
                </ul>
             </nav>
            </div>
              <Routes>
                <Route path="/" element={<Home />}  />  
                <Route path="/Home" element={<Home />}  />  
                <Route path="/About" element={<About />}  />   
                <Route path="/Contact" element={<Contact />}  /> 
                <Route path="/Login" element={<Login />}  />        
                <Route path="/Register" element={<Register />}  /> 
                <Route path="/Portfolio" element={<Portfolio />}  /> 
                                

              </Routes>

        </BrowserRouter>

        
        </>
    );
}