import { useEffect, useState } from "react";

function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.log(error));
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

export default Home;