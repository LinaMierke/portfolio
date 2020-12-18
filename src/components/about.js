import React from "react";
import girl from "./yomero.png"
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

export default function About() {

    return (

        <div className="container" style={{paddingTop:'0'}}>
            <div style={{height: '50%', width: '50%'}}>
            <h1> Hello I am Lina! </h1>
            <p> Goal-oriented Software Developer bringing a strong commitment to collaboration and solutions-oriented problem-solving. Leader, enthusiastic, and eager to contribute to team success through hard work, creativity, attention to detail, and excellent organizational skills. Use various web design packages to develop custom-crafted, customer-focused websites, and designs.</p>
                <img src={girl} alt="girl" className="img" />
            
            <a href="https://github.com/LinaMierke" target="_blank"> 
            <LinkedInIcon style={{fontSize: 50, padding: '20px'}}/>
            </a>
            <a href="https://www.linkedin.com/in/linamierke/" target="_blank"> 
            <GitHubIcon style={{fontSize: 50, padding: '20px'}}/>
            </a>
            </div>



        </div>
    )
}