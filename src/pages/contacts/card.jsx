import React from 'react'
import './card1.css'
import { motion } from "framer-motion";


function Card1(props){
    var a=props.icon;
    return(
    <motion.div className='card1' whileHover={{ scale: 1.01}} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
    <div><a/></div>
    <div className='text1' >
    <h1 className='heading1'>{props.heading}</h1>
        <p className='para1'>{props.ans}</p>
    </div>
    </motion.div>
    )
}

export default Card1;