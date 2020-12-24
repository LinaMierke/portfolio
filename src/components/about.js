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
            <h1> Hello! I am Lina </h1>
            <p> I'm a DC based Software Developer who loves to create, learn and explore. 
            Being in the Education field shows me the amazing power of knowledge and thanks to that I treat everyday as a new opportunity to grow and improve! I bring hard work, creativity, attention to detail, and excellent organizational skills to my daily work. If you want to know more about me don't hesitate to reach out to me. 

            </p>
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