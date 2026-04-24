import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Index from "./pages/Home";
import Detail from "./pages/Detail";

export default function App() {
  
  return (
    <Router>
      <Header/>
      
      <Routes>
        <Route exact path="*" element={<Index />} />
        <Route exact path="/index" element={<Index />} />
        <Route path="/detail/:id" element={<Detail />} />

      </Routes>

      <Footer />
    </Router>
  );
}