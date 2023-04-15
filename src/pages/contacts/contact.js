import React,{ Component }  from 'react'
import { ReactDOM } from 'react'
import './contact.css'
import { motion } from "framer-motion";
import Info from "./cardfull"
import { send } from 'emailjs-com';
import { useState } from 'react';
import { GoLocation } from "react-icons/go";
import { MdEmail } from "react-icons/md";
import { AiFillPhone,AiFillGithub,AiFillLinkedin } from "react-icons/ai";


function Form(){
    return(
      <div className='MainDiv' >
      <div>
        <img src='./images/contacts.jpeg' className="Contactpic"/> 
      </div>
      <div className='socialMedia'>
       <a href='https://github.com/Krish1-2' className='ref'><AiFillGithub/> Github</a>
       <a href='https://www.linkedin.com/feed/' className='ref'> <AiFillLinkedin/>LinkedIn </a>
      </div>
      <div className='Infodiv'>
      <GoLocation className='fa-5x icon1'/>
      <MdEmail className='fa-5x icon2'/>
      < AiFillPhone className='fa-5x icon3'/>
        <Info />
      </div>
    <div className='Form-wrap'>
    <form className='Form'>
    <h1 className='Cnt'>CONTACT ME</h1>
    <div class="form-group">
    <input type="Name" class="form-control"  placeholder="Enter your name" />
  </div>
  <div class="form-group">
    <input type="email" class="form-control" id="InputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
    <small  className="form-text">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <textarea type="text" class="form-control" id="InputText1" aria-describedby="emailHelp"  />
  </div>
  <button type="submit" class="btn btn-outline-primary btnsub">Submit</button>
</form>
          </div>
  </div>
    )
  }



    // import { Map, GoogleApiWrapper } from 'google-maps-react';

// const mapStyles = {
//     width: '40%',
//     height: '40%',
//   };

//    function render() {
//         return (
//             <Map
//               google={this.props.google}
//               zoom={8}
//               style={mapStyles}
//               initialCenter={{ lat: 47.444, lng: -122.176}}
//             >
//               <Marker position={{ lat: 18.960270, lng:72.812523}} />
//             </Map>
//         );
//       }
    
    
//     export default GoogleApiWrapper({
//         apiKey: 'TOKEN HERE'
//       })(MapContainer);



      export default Form;