import React from "react";
import { Switch, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Home, SubSection, AbilityScores } from "./Pages";
import Conditions from "./Pages/Conditions";
import Classes from './Pages/Classes'

function App() {
  return (
    <main>
      <Navbar/>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/ability-scores/:id">
          <AbilityScores />
        </Route>
        <Route path="/conditions/:id">
          <Conditions />
        </Route>
        <Route path="/classes/:id">
          <Classes />
        </Route>
        <Route path="/:id">
          <SubSection />
        </Route>
      </Switch>
      <Footer/>
    </main>
  );
}

export default App;
