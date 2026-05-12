import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

import { useEffect, useState } from "react";

function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="page">
      <h1>Users List 🚀</h1>

      <div className="card-container">
        {users.map((user) => (
          <div className="card" key={user.id}>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <p>{user.company.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="page">
      <h1>About Page</h1>
    </div>
  );
}

function Contact() {
  return (
    <div className="page">
      <h1>Contact Page</h1>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <nav className="navbar">
          <div className="logo">MyApp</div>

          <div className="links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;