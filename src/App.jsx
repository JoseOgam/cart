import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Cart, Header, Products } from "./components/index";

function App() {
  return (
    <BrowserRouter>
      <div className="">
        <div>
          <Header />
        </div>
        <div>
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
