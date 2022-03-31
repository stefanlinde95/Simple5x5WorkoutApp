import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import React, { lazy, Suspense } from "react";

import Navbar from "./components/navbar.component";
import Workout from "./components/workout.component";
import Footer from "./components/footer.component";
const Guides = lazy(() => import("./pages/guides"));
const Videos = lazy(() => import("./pages/videos"));
const Faq = lazy(() => import("./pages/faq"));
const SingleVideo = lazy(() => import("./pages/singleVideo"));
const ExercisesList = lazy(() =>
  import("./components/exercises-list.component"),
);

function App() {
  return (
    <>
      <Router>
        <Navbar props={"something"} />
        <Suspense
          fallback={
            <div className="text-white text-center my-4">Loading...</div>
          }
        >
          <Routes>
            <Route path="/" exact element={<Workout />} />
            <Route path="/videos" exact element={<Videos />} />
            <Route path="/videos/:id" element={<SingleVideo />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/history" element={<ExercisesList />} />
            <Route path="/guides" element={<Guides />} />
          </Routes>
        </Suspense>
        <Footer />
      </Router>
    </>
  );
}

export default App;
