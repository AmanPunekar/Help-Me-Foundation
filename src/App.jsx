import Footer from "./components/footer";
import Home from "./components/home";
// import About from "./components/about";
import Blog from "./components/blog";
import Causes from "./components/causes";
import Contact from "./components/contact";
import Gallerys from "./components/gallery";
import "./App.css";
import CheckoutPage from "./components/checkout";
import Header from "./components/header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Success  from "./components/sucess";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/causes" element={<Causes />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallerys />} />
          <Route path="/success" element={<Success />} />
        </Routes>
        <Footer></Footer>
      </Router>
    </>
  );
}

export default App;
