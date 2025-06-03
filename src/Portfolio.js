import React from "react";
import './Portfolio.css';
import img from '../src/Assets/sailu.jpeg';

export default function Portfolio() {
    return(
        <>
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
        <section class="home">
            <div class="home-info">
                <h1>Bhumireddy Sailaja</h1>
                <h2>I'm a 
                     <span style={{'--i':4,
                        dataText:'Frontend Developer'}}> Frontend Developer</span>
                    <span style={{'--i':3,
                        dataText:'Youtuber'}}> Youtuber</span>
                    <span style={{'--i':2,dataText:'Blogger'}}> Blogger</span>
                    <span style={{'--i':1,
                        dataText:'Designer'}}> Designer</span>
                </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing
                    elit. Breatae aut mins, itaque velit nisi
                    exercitationem alias dolores id officials similique hic
                    odit eaque ipsam. Aperium volupatatum blanditiis setInterval
                    , pariaatur totam;
                </p>
                <div class="btn-sci">
                    <button class ="btn">Download Cv</button>
                    <div class="sci">
                    <button><i class='bx bxl-github'></i></button>
                    <button ><i class='bx bxl-linkedin' ></i></button>
                    <button ><i class='bx bxl-twitter' ></i></button>
                    <button ><i class='bx bxl-youtube' ></i></button>
                    </div>
                </div>

            </div>
            <div class="home-img">
                <div class="img-box">
                    <div class="img-item">
                        <img src={img} alt="" style={{width:'450px',height:'450px'}}/>
                    </div>
                </div>
            </div>
            
        </section>
        </>
    )
}