import { Header } from "./components/layout/Header.tsx";
import { Footer } from "./components/layout/Footer.tsx";
import { Works } from "./components/layout/Works.tsx";
import { About } from "./components/layout/About.tsx";
import { Raft } from "./components/projects/Raft.tsx";
import { Santorini } from "./components/projects/Santorini.tsx";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <>
      <Header />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Works />} />
          <Route path="/about" element={<About />} />
          <Route path="/raft" element={<Raft />} />
          <Route path="/santorini" element={<Santorini />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default App;
