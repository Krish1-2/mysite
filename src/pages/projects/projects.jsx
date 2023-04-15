import React from "react";
import { ReactDOM } from 'react';
import Card from './card'
import { motion } from "framer-motion";
import './card.css' 
import {Routes, Route, useNavigate} from 'react-router-dom';



const numbers=[{
    num:1,
    cap:"Drum-kit",
    disc:"This project was my first experience with front-end.I used html,css and java script to create differnt drum beats on different key presses",
    pic:'./images/P1.png',
    redirect:'https://github.com/Krish1-2/Drumkit-'
},{
    num:2,
    cap:"Shortest Pathfinder",
    disc:"In this project i used Djikstra's algorithm to create a shortest path from a start point to an end point. Created this project in react ",
    pic:'./images/P2.png',
    redirect:'https://github.com/Krish1-2/shortest-Pathfinder'
},{
    num:3,
    cap:"Simons Challenge",
    disc:"follow the pattern to win the game. Enjoy this joyful game based on memory",
    pic:'./images/P3.png',
    redirect:'https://github.com/Krish1-2/Simon-game-challenge'
}];


function Home(){

    return(
    <div className='head1'>
     { numbers.map((number) =>(
        <div  key={number.num}>
       <Card num={number.num} disc={number.disc} pic={number.pic} redirect={number.redirect}/>
       <div className="space1"></div>
       </div>
      )
    )}
    </div>
    )
    }
    
    export default Home;

