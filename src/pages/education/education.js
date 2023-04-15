import React,{useState} from 'react'
import './education.css'
import { motion } from "framer-motion";
import Skills from "./skills"


function change(){
    // document.getElementById('change1').innerHTML= 
    document.getElementById('change1').style.transform='scale(3,3)';

}

export default function Eduction(){
    const [DescJ, setDescJ] = useState('JUNIOR COLLEGE');
    const [DescD, setDescD] = useState('DEGREE COLLEGE');
    const [DescS, setDescS] = useState('SCHOOL');
    return(
      <div className='Mainedu'>
    <div className='Maindiv'>
    <motion.div whileHover={{ scale: 1.2}} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} onHoverStart={() => setDescS('GOPI BIRLA MEMORIAL SCHOOL')}
     id="change1">
       <h1 className='k'>{DescS}</h1>
       <ol>
    <li>YEAR:2019</li>
    <li>PASSING PERCENT:95%</li>
    <li>BOARD:CBSE</li>
   </ol>
    </motion.div>
    <motion.div whileHover={{ scale: 1.2}} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} onHoverStart={() => setDescJ('K.C. COLLEGE')} 
     id="change2">
        <h1 className='k'>{DescJ}</h1>
       <ol>
    <li>YEAR:2021</li>
    <li>PASSING PERCENT:96.33%</li>
    <li>BOARD:HSC</li>
   </ol>
    </motion.div>
    <motion.div whileHover={{ scale: 1.2}} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} onHoverStart={() => setDescD('S.P.I.T')}
     id="change3">
     <h1 className='k'>{DescD}</h1>
       <ol>
    <li>YEAR:2021-2025</li>
    <li>CURRENT GPA:8.8</li>
    <li>BOARD:MUMBAI UNIVERSITY</li>
   </ol>
    </motion.div>
    </div>
    <Skills/>
    </div>
    )
    }
   

      