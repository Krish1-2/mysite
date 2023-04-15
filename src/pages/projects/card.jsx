import React from 'react'
import './card.css'
import { motion } from "framer-motion";


function Card(props){
    return(
    <motion.div className='card' whileHover={{ scale: 1.01}} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
    <motion.div className='img-box' drag dragConstraints={{left:0, right:0,top:0,bottom:0}}>
        <img src={props.pic} className='pic'></img>
    </motion.div>
    <div>
    <div className='text' >
    <h1>PROJECT{props.num}</h1>
        <p className='para'>{props.disc}</p>
    </div>
    </div>
    <a href={props.redirect} >
    <button type="button" class="btn btn-outline-success play">
    <i class="fa fa-play fa-lg"></i>
       </button>
       </a>
    </motion.div>
    )
}

export default Card;
