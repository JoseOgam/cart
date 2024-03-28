import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Cart, Contact, Header, Products } from "./components/index";

function App() {
  return (
    <BrowserRouter>
      <div className=" relative z-0">
        <div>
          <Header />
        </div>
        <div className=" relative z-0">
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
        <div className=" relative z-0">
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
