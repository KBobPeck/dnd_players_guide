import React from "react";
import { Switch, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Home, SubSection, AbilityScores } from "./Pages";
import Conditions from "./Pages/Conditions";
import Classes from "./Pages/Classes";
import Alignments from "./Pages/Alignments";
import Languages from "./Pages/Languages";
import Error from "./Pages/Error";
import MagicItem from "./Pages/MagicItem";

function App() {
  return (
    <main>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route exact path="/ability-scores/:id">
          <AbilityScores />
        </Route>
        <Route path="/conditions/:id">
          <Conditions />
        </Route>
        <Route path="/classes/:id">
          <Classes />
        </Route>
        <Route path="/alignments/:id">
          <Alignments />
        </Route>
        <Route path="/languages/:id">
          <Languages />
        </Route>
        <Route path="/magic-items/:id">
          <MagicItem />
        </Route>
        <Route path="/:id">
          <SubSection />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
      <Footer />
    </main>
  );
}

export default App;
