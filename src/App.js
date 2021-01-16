import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import base from "../src/components/yes.png"
import NavBar from "../src/components/navbar"
import All from "./components/All"
import About from "./components/about"
// import SubdirectoryArrowRightIcon from '@material-ui/icons/SubdirectoryArrowRight';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <div className="center" >
              <div className="information">
                <div className="name"> Lina Mierke</div>
                <div className="title"> Software Developer </div>
                <div className="arrow">
                  {/* <SubdirectoryArrowRightIcon /> */}
                </div>
                
              </div>
              <div >
                <img src={base} alt="" className="imge" />
              </div>

            </div>
          </Route>

          <Route exact path="/portfolio">
            <All />
          </Route>

          <Route exact path="/about">
            <About />
          </Route>


        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
