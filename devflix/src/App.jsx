import { useState } from "react";

import Header from "./components/Header";
import CourseSection from "./components/CourseSection";
import VideoPlayer from "./components/VideoPlayer";

import { categories } from "./data/courses";

import "./App.css";

function App() {
  const [selectedCourse, setSelectedCourse] =
    useState(null);

  function handleSelectCourse(course) {
    setSelectedCourse(course);
  }

  function handleCloseVideo() {
    setSelectedCourse(null);
  }

  return (
    <>
      <Header categories={categories} />

      <main id="home">
        <section className="hero">
          <h1>Bem-vindo ao DevFlix</h1>
          <p>
            Aprenda programação com aulas gratuitas.
          </p>
          <a href="#frontend" className="hero-button">
            Explorar aulas
          </a>
        </section>

        {categories.map((category) => (
          <CourseSection
            key={category.id}
            category={category}
            onSelect={handleSelectCourse}
          />
        ))}
      </main>

      <VideoPlayer
        course={selectedCourse}
        onClose={handleCloseVideo}
      />
    </>
  );
}

export default App;