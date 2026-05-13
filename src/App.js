import { BrowserRouter } from "react-router-dom";

import Navbar from "./components/Navbar";
import AppRoutes from "./components/AppRoutes";

import "./App.css";

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