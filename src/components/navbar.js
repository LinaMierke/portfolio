import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import button from '@material-ui/core/button';
import './navbar.css'

// const useStyles = makeStyles((theme) => ({
//     root: {
//         flexGrow: 1,
        
//         // backgroundColor: 'red'
        
//     },
//     //   menuButton: {
//     //     marginRight: theme.spacing(6),
//     //   },
//     title: {
//         flexGrow: 1,
        
//     },
    
    
// }));

export default function NavBar() {
    // const classes = useStyles();

    return (
        <div className="nav">
        <div className="bar"> 
            <AppBar position="static" style={{ backgroundColor: 'white', border: 'none', boxShadow: 'none' }}>
                <Toolbar style={{ display: 'flex', justifyContent: 'left', }}>
                    <Link to="/" style={{textDecoration: 'none' }}>
                        <button  className="uno" style={{ paddingRight: '90px', color: '##292E46', }}>Home</button>
                    </Link>
                    <Link to="/about" style={{textDecoration: 'none' }}>
                        <button className="uno" style={{ paddingRight: '90px', color: '##292E46' }}>About </button>
                    </Link>
                    <Link to="/portfolio" style={{textDecoration: 'none' }}>
                        <button  className="uno" style={{ paddingRight: '90px', color: '##292E46' }}>Portfolio</button>
                    </Link>
                    <a href="https://drive.google.com/file/d/1q366vGZEZfJTWatG3BGPTsMzNKOX90EW/view?usp=sharing" target="_blank"  rel="noopener noreferrer" style={{textDecoration:'none'}}>                  
                    <button  className="uno" style={{ paddingRight: '90px', color: '#292E46' }}>Resume</button>
                    </a>
                </Toolbar>
            </AppBar>
            </div>
        </div>
    );
}
