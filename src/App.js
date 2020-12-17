import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import base from "../src/components/yes.png"
import NavBar from "../src/components/navbar"
import All from "./components/All"


function App() {
  return (
    <div className="App">

    

    <BrowserRouter>

    <NavBar/> 
      <Switch>
        <Route exact path="/">
          
          <div className="center" >
            <div className="information">
              <div className="name"> Lina Mierke</div>
              <div className="title"> Software Developer </div>

            </div>

            <div >
              <img src={base} alt="base" className="img" />
            </div>

          </div>
        </Route>
        
        <Route exact path="/portfolio">
          <All />
        </Route>


      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
