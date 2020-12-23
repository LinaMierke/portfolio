import React from "react";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Mail';
import "./about.css"

export default function About() {

    return (

        <div className="container2" style={{paddingTop:'0'}}>
            <div style={{height: '50%', width: '50%'}}>
            <div className="inner"> 
            <h1> Hello! I am Lina! </h1>
            <p> Goal-oriented Software Developer bringing a strong commitment to collaboration and solutions-oriented problem-solving. Leader, enthusiastic, and eager to contribute to team success through hard work, creativity, attention to detail, and excellent organizational skills. Use various web design packages to develop custom-crafted, customer-focused websites, and designs.</p>
            </div> 
                <img src="https://i.imgur.com/KNheUPa.png" alt="girl" rel="noopener noreferrer" className="img" />
            <div className="social">       
            <a href="https://www.linkedin.com/in/linamierke/" target="_blank" rel="noopener noreferrer"> 
            <LinkedInIcon style={{fontSize: 50, padding: '20px', color:'#4E127D'}}/>
            </a>
            <a href="https://github.com/LinaMierke" target="_blank" rel="noopener noreferrer"> 
            <GitHubIcon style={{fontSize: 50, padding: '20px', color:'#4E127D'}}/>
            </a>
            <a href="mailto:linamierke@gmail.com" target="_blank" rel="noopener noreferrer">
               <EmailIcon style={{fontSize: 50, padding: '20px', color:'#4E127D'}}/> 
            </a>
            </div>
            </div>



        </div>
    )
}