import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/index";

function App() {
  return (
    <BrowserRouter>
      <div className=" relative z-0">
        <div>
          <Header />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
