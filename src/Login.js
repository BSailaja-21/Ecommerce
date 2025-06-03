import React, { useState } from 'react';
import './Login.css';
import user_icon from '../src/Assets/user.png';
import show_icon from '../src/Assets/show.png';
import email_icon from '../src/Assets/email.png';



export default function Login () {
    const [action, setAction] = useState("Login");
    
    return(
        <>
        <section className='sec'>
        <div className='container'>
            <form>
            <div className='headers'>
                <div className='text'>{action}</div> 
                <div className='underline'></div>          
            </div>
            <div className='inputs'>
                {action==="Login"?<div></div>:<div className='input'>
                    <img src={user_icon} alt="" style={{width:'20px',height:'20px'}} />
                    <input type="text" placeholder='Username'/>
                </div>}
                
                <div className='input'>
                    <img src={email_icon} alt="" style={{width:'20px',height:'20px'}}/>
                    <input type="email" placeholder='Email-Id'/>
                </div>
                <div className='input'>
                    <img src={show_icon} alt="" style={{width:'20px',height:'20px'}}/>
                    <input type="password" placeholder='Password'/>
                </div>
            </div>
            {action==="Sign Up"?<div></div>: <div className='forgot-password'>Lost Password? <span>Click Here!</span></div>}
           
            <div className='submit-container'>
                <div className={action==='Login'?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
                <div className={action==='Sign Up'?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
            </div>
            </form>
        </div>
        </section>
        
        

        </>
    )

}