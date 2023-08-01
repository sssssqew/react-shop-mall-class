import { Route, Routes, useLocation } from "react-router-dom";
import { useState } from "react";

import "./css/my_reset.css";
import "./css/App.css";

import Header from "./pages/Header.js";
import Footer from "./pages/Footer.js";
import Main from "./pages/Main.js";
import Shop from "./pages/Shop.js";
import Detail from "./pages/Detail.js";
import list from "./pages/productData.js";

function App() {
  let [data] = useState(list);
  let urlname = useLocation().pathname;

  console.log(urlname);
  return (
    <div className="App">
      <Header urlname={urlname} />
      <Routes>
        <Route path="/" element={<Main data={data} />}></Route>
        <Route path="/Shop" element={<Shop data={data} />}></Route>
        <Route path="/Detail/:id" element={<Detail data={data} />}></Route>
        <Route path="/*" element={<Main data={data} />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
