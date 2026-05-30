import { BrowserRouter } from "react-router-dom";

import Navbar from "./components/Navbar";
import AppRoutes from "./components/AppRoutes";

import "./styles/main.scss";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;