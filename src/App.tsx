import "./App.css";
import "./Components/Navbar";
import { Routes, Route, useLocation } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import ContactUs from "./Pages/ContactUs";
import BootCamps from "./Pages/BootCamps";
import Contact from "./Pages/Contact";
import { AnimatePresence } from "framer-motion";
import BootCamp from "./Pages/BootCamp";

const App = () => {
  // let { userId } = useParams();
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes key={location.pathname} location={location}>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contactus" element={<ContactUs />} />
          <Route path="bootcamps" element={<BootCamps />} />
          <Route path="bootcamps/:id" element={<BootCamp />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default App;
