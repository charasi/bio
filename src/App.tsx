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
        {/* header app fixed to top */}
        <Header />
        <Routes>
          {/* default route when page loads*/}
          <Route path="/" element={<Works />} />
          {/* route to about page */}
          <Route path="/about" element={<About />} />
          {/* the following routes are routes to projects */}
          <Route path="/works/raft" element={<Raft />} />
        </Routes>
        {/* footer fixed to bottom */}
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
