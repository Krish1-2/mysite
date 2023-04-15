import React from 'react'
import './card1.css'
import { motion } from "framer-motion";
import Card1 from './card'
import { GoLocation } from "react-icons/go";

const  types=[{
    num:1,
    icon:' MdEmail',
    heading:"EMAIL",
    ans:"krishmehta13@gmail.com"
  },{
    num:2,
    icon:'AiFillMail',
    heading:"PHONE",
    ans:"9594069152"
  },{
    num:3,
    icon:'GoLocation',
    heading:"LOCATION",
    ans:"Grant road,Mumbai 400007"
  }]
  

function Form(){
return(
    types.map((type) =>(
       <Card1 num={type.num} icon={type.icon} heading={type.heading} ans={type.ans}/>
      ))
    )
}

export default Form;