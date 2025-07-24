import { Header } from "./components/layout/Header.tsx";
import { Footer } from "./components/layout/Footer.tsx";
import { Works } from "./components/layout/Works.tsx";
import { About } from "./components/layout/About.tsx";
import { Raft } from "./components/projects/Raft.tsx";
import { Santorini } from "./components/projects/Santorini.tsx";
import { Routes, Route, useLocation } from "react-router-dom";

import gsap from "gsap";
import { Flip } from "gsap/Flip";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import { BookService } from "./components/projects/BookService.tsx";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(Flip);
gsap.registerPlugin(SplitText);

function App() {
  const location = useLocation();

  return (
    <>
      <Header />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Works />} />
        <Route path="/about" element={<About />} />
        <Route path="/raft" element={<Raft />} />
        <Route path="/santorini" element={<Santorini />} />
        <Route path="/bookservice" element={<BookService />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
