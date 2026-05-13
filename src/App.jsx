import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Index from "./pages/Home";
import Detail from "./pages/Detail";
import Tranggioithieu from "./components/Tranggioithieu";
import Tintuc from "./pages/Tintuc";
import Sanpham from"./pages/Sanpham";

export default function App() {
  
  return (
    <Router>
      <Header/>
      
      <Routes>
        <Route exact path="*" element={<Index />} />
        <Route exact path="/index" element={<Index />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/gioithieu" element={<Tranggioithieu />} />
        <Route path="/tintuc" element={<Tintuc />} />
        <Route path="/sanpham" element={<Sanpham />} />

        

      </Routes>

      <Footer />
    </Router>
  );
}