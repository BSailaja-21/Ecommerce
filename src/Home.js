import React from 'react';
import './Home.css';
import {useNavigate} from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate();
    const handleExploreClick = () => {
        navigate('/About');
    };
    return(
        <>
        
        <div class="ele">
        <h1 class="title">We are here!</h1>
        <h3 class="titles">Fancy wings<br/>Women Beauty Parlour</h3>
        <h5 class="sub-title">
            - For face gloss and all unit upgrades
        </h5>
        <p>Fancy wings is the new and leadind women's beauty Parlour<br /> in  Hyderabad
            We are dedicated artists and we make your body<br />  units beauty and we take care
        </p>
        <p>Are you excited with the fluttering sound of <span>Fancy wings?</span></p>
        <button class="sub" onClick={handleExploreClick}>Explore Now</button>
        </div>
        </>

    );
}