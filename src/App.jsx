import About from "./sections/About";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";

const App = () => {
  return (
    <main className="px-24">
      <Hero />
      <About />
      <Projects />
      <Footer />
    </main>
  );
};

export default App;
