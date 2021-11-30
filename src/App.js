import { Component } from "react";
import "./App.css";
import Herbivores from "./components/Herbivores";
import Carnivores from "./components/Carnivores";
import { Route, Link, Routes } from "react-router-dom";
import Dinosaurs from "./components/Dinosaurs";


// CONDITIONAL RENDERING FROM REACT ROUTER, NO METHODS OR STATE NEEDED
class App extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     carnivoresShown: true,
  //     herbivoresShown: true,
  //   };
  // }

  // changeHerbivores = () => {
  //   this.setState({
  //      herbivoresShown: !this.state.herbivoresShown,
  //   })
  // }

  // changeCarnivores = () => {
  //   this.setState({
  //     carnivoresShown: !this.state.carnivoresShown,
  //   })
  // }

  // showAll = () => {
  //   this.setState({
  //     carnivoresShown : true,
  //     herbivoresShown: true
  //   })
  // }

  render() {
    return (
      <div className="App">
        <h1>Dinosaurs! They're cool! I GUESS.</h1>
        <header>
          <ul>
            <li>
              <Link to="/herbivores">
                Herbivores
              </Link>
            </li>
            <li>
              <Link to="/carnivores">
                Carnivores
              </Link>
            </li>
            <li>
              <Link to="/">
                All
              </Link>
            </li>
          </ul>
        </header>
        {/* <Herbivores /> */} {/* <Carnivores /> */}
        <div>
          <Routes>
          <Route exact path="/" element={<Dinosaurs />} />
          <Route path="/herbivores" element={<Herbivores />} />
          <Route path="/carnivores" element={<Carnivores />} />
        </Routes>
        </div>
      </div>
    );
  }
}
        
/* HOW TO MAKE LINK CHANGE IN STATE? WHEN USER CLICKS LINK, CHANGES LINK'S STATE? = ADD A METHOD THAT CHANGES STATE */

/* HOW CAN WE SHOW HERBIVORES ONLY IF THIS.STATE HERBIVORES IS TRUE?... CONDITIONAL RENDERINGS... 

IF THIS IS TRUE SHOW THIS OR THIS... 
{this.state.herbivoresShown ? <Herbivores/> : null}
IF THIS IS TRUE SHOW THIS... 
{this.state.carnivoresShown && <Carnivores/>} 

OLDER VERSIONS USE...
<Switch>
 <Route path="/herbivores" component={<Herbivores} />
 </Switch>
*/

export default App;
