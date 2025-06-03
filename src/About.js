import React from "react";
import './About.css';
import {useNavigate} from 'react-router-dom';

export default function About() {
  const navigate = useNavigate();
    const handleExploreClick = () => {
        navigate('/Register');
    };
    return(
        <>
        <div class="cards">
       <div class="card-container">
  <div class="card-wrap">
    <div class="card-header one">
      <i class="fas fa-code"></i>
    </div>
    <div class="card-content">
      <h1 class="card-title">Makeup</h1>
      <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      <button class="card-btn one" onClick={handleExploreClick}>Details</button>
    </div>
  </div>
  <div class="card-wrap">
    <div class="card-header two">
      <i class="fab fa-css3-alt"></i>
    </div>
    <div class="card-content">
      <h1 class="card-title">HairStyles</h1>
      <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      <button class="card-btn two" onClick={handleExploreClick}>Details</button>
    </div>
  </div>
  <div class="card-wrap">
    <div class="card-header three">
      <i class="fab fa-html5"></i>
    </div>
    <div class="card-content">
      <h1 class="card-title">Bridal Makeover</h1>
      <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      <button class="card-btn three" onClick={handleExploreClick}>Details</button>
    </div>
  </div>
  <div class="card-wrap">
    <div class="card-header four">
      <i class="fab fa-js-square"></i>
    </div>
    <div class="card-content">
      <h1 class="card-title">Mehandi</h1>
      <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      <button class="card-btn four" onClick={handleExploreClick}>Details</button>
    </div>
  </div>
  <div class="card-wrap">
    <div class="card-header five">
      <i class="fab fa-js-square"></i>
    </div>
    <div class="card-content">
      <h1 class="card-title">Nail Art</h1>
      <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      <button class="card-btn five" onClick={handleExploreClick}>Details</button>
    </div>
  </div>
  <div class="card-wrap">
    <div class="card-header six">
      <i class="fab fa-js-square"></i>
    </div>
    <div class="card-content">
      <h1 class="card-title">Saree drapping</h1>
      <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      <button class="card-btn six" onClick={handleExploreClick}>Details</button>
    </div>
  </div>
  <div class="card-wrap">
    <div class="card-header seven">
      <i class="fab fa-js-square"></i>
    </div>
    <div class="card-content">
      <h1 class="card-title">Jewellery </h1>
      <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      <button class="card-btn seven" onClick={handleExploreClick}>Details</button>
    </div>
  </div>
  <div class="card-wrap">
    <div class="card-header eight">
      <i class="fab fa-js-square"></i>
    </div>
    <div class="card-content">
      <h1 class="card-title">Eyebrows</h1>
      <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      <button class="card-btn eight" onClick={handleExploreClick}>Details</button>
    </div>
  </div>
 </div>
 </div>


        </>
    );
}