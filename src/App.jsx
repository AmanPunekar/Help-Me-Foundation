import Footer from "./components/footer";
import Home from "./components/home";
// import About from "./components/about";
import Blog from "./components/blog";
import Causes from "./components/causes";
import Contact from "./components/contact";
import Gallery from "./components/gallery";
import "./App.css";
import Header from "./components/header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/causes" element={<Causes />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
        <Footer></Footer>
      </Router>
    </>
  );
}

export default App;
