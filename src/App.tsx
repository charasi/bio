import { Header } from "./components/layout/Header.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./components/layout/Footer.tsx";
import { Works } from "./components/layout/Works.tsx";
import { About } from "./components/layout/About.tsx";
import { Raft } from "./components/projects/Raft.tsx";

function App() {
  // Create a history object
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Works />} />
          <Route path="/works/raft" element={<Raft />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
