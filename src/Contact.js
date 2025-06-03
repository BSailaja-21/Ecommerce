import React from "react";
import { MapContainer, TileLayer,  } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./Contact.css";

export default function Contact() {
  const position = [17.385044, 78.486671]; // Example coordinates for Hyderabad

  return (
    <>
      <link
        href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
        rel="stylesheet"
      ></link>
      <section>
        <div className="cont">
          <div className="content">
            <div className="left-side">
              <div className="address details">
                <i className="bx bxs-location-plus"></i>
                <div className="topic">Address</div>
                <div className="text-one">Chandhanagar, NP12</div>
                <div className="text-two">Hyderabad</div>
              </div>
              <div className="phone details">
                <i className="bx bxs-phone"></i>
                <div className="topic">Phone</div>
                <div className="text-one">+91 00 0785 8475</div>
                <div className="text-two">+91 34 5657 6567</div>
              </div>
              <div className="email details">
                <i className="bx bx-envelope"></i>
                <div className="topic">Email</div>
                <div className="text-one">codinglab@gmail.com</div>
                <div className="text-two">info.codinglab@gmail.com</div>
              </div>
            </div>
            <div className="right-side">
              <div className="form-container">
                <div className="topic-text">Send us a message</div>
                <p>
                  If you have any work for me or any queries related to my
                  tutorial, you can send me a message here. It's my pleasure to
                  help you.
                </p>
                <form>
                  <div className="input-box">
                    <input
                      name="fullName"
                      placeholder="Enter your Name"
                      required
                    />
                  </div>
                  <div className="input-box">
                    <input
                      placeholder="Enter your Email"
                      name="email"
                      required
                    />
                  </div>
                  <div className="input-box message-box">
                    <textarea name="message" placeholder="Enter your Message" required></textarea>
                  </div>
                  <div className="bttn">
                    <button type="submit">Send Message</button>
                    <div className="map-container">
                <MapContainer
                  center={position}
                  zoom={13}
                  className="profile-map"
                >
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                     />
                </MapContainer>
              </div>
                  </div>
                </form>
              </div>
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
}