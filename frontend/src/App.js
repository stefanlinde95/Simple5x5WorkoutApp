import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import React from "react";

import ExercisesList from "./components/exercises-list.component";
import Navbar from "./components/navbar.component";
import Workout from "./components/workout.component";
import Footer from "./components/footer.component";
import Guides from "./components/guides.component";
import Videos from "./components/videos.component";
import Faq from "./components/faq.component";
import SingleVideo from "./components/singleVideo.component";

function App() {
  return (
    <>
      <Router>
        <Navbar props={"something"} />
        <Routes>
          <Route path="/" exact element={<Workout />} />
          <Route path="/videos" exact element={<Videos />} />
          <Route path="/videos/:id" element={<SingleVideo />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/history" element={<ExercisesList />} />
          <Route path="/guides" element={<Guides />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
