// import LandingPage from './Components/LandingPage/LandingPage';
// import Home from './Components/Home/Home';
// import DogCreated from './Components/DogCreated/DogCreated';
// import DogDetail from './Components/DogDetail/DogDetail';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { LandingPage } from './Views/LandingPage/LandingPage';
import { Home } from './Views/Home/Home';
import { BreedDetail } from './Views/BreedDetail/BreedDetail';
import { CreateBreed } from './Views/CreateBreed/CreateBreed';
import './App.css';

function App() {
  
  return (
    <BrowserRouter>
    <div className="App">
     <Switch>
     
      <Route exact path="/" component={ LandingPage }></Route>
      <Route exact path="/home" component={ Home }></Route>
      <Route exact path="/newDog" component={ CreateBreed }></Route>
      <Route exact path="/home/:id" component={ BreedDetail }></Route>

      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
