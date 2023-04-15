// import React from 'react'
import * as React from "react";
import { ReactDOM } from 'react'
import './index.css'
import { motion } from "framer-motion";

 const faders=document.querySelectorAll('.fadein');

const appearOptions={
    threshold:1,
    rootMargin: "0px,0px,-100px,0px"
};


function Home(){

    return(
    <div className="head">
    <motion.div className="about" drag dragConstraints={{left:0, right:0,top:0,bottom:0}}>
       <h1>ABOUT ME</h1> 
       <p>
       Passionate about my work.I'm hard working and  enjoy what i do. I'm a fast learner and
       have good leadership quality. Always keen to learn new things and ideas.My hobbies include working-out,listening to music and dancing.
       I'm confident,socailizing and love to travel to new places and meet new people.
       </p>
    </motion.div>
    </div>
    )
    }
    
    export default Home;