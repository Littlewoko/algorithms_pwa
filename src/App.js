import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

const Users = () => {
  // state
  const [users, setUsers] = React.useState([]);
  // effects
  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => {
        setUsers(users);
      })
      .catch((err) => {});
  }, []);
  //render
  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
};

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<Users />} />
    </Routes>
  </BrowserRouter>
);

export default App;