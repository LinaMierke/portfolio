import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
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
        <div >
        <div className="bar"> 
            <AppBar position="static" style={{ backgroundColor: 'white', border: 'none', boxShadow: 'none' }}>
                <Toolbar style={{ display: 'flex', justifyContent: 'left', }}>
                    <Link to="/" style={{textDecoration: 'none' }}>
                        <Button  style={{ paddingRight: '90px', color: '##292E46', }}>Home</Button>
                    </Link>
                    <Link to="/about" style={{textDecoration: 'none' }}>
                        <Button style={{ paddingRight: '90px', color: '##292E46' }}>About </Button>
                    </Link>
                    <Link to="/portfolio" style={{textDecoration: 'none' }}>
                        <Button style={{ paddingRight: '90px', color: '##292E46' }}>Portfolio</Button>
                    </Link>
                    <a href="https://drive.google.com/file/d/1q366vGZEZfJTWatG3BGPTsMzNKOX90EW/view?usp=sharing" target="_blank"  rel="noopener noreferrer" style={{textDecoration:'none'}}>                  
                    <Button style={{ paddingRight: '90px', color: '#292E46' }}>Resume</Button>
                    </a>
                </Toolbar>
            </AppBar>
            </div>
        </div>
    );
}
