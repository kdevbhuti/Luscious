import Navigation from "./Components/Navigation"
import Home from "./Components/Home/Home"
import Cooking from "./Components/Cooking"
import Footer from "./Components/Footer"
import { BrowserRouter, Route, Switch } from "react-router-dom";



function App() {
  const userId = localStorage.getItem("userId");

  return (
    <div className="App">
    <Navigation/>
    <BrowserRouter>
      <Switch>
      <Route path="/Cooking" component={Cooking}>
      </Route>
        <Route path="/" component={Home}>
        </Route>
      </Switch>
    </BrowserRouter>
    <Footer/>
   
    </div>
  );
}

export default App;
