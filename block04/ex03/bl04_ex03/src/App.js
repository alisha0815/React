import React, { useState } from "react";

const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let users = [
    {
      id: 1,
      email: "stephan01@gmail.com",
      password: "password",
    },
    { id: 2, email: "alisha02@gmail.com", password: "password" },
    { id: 3, email: "moon04@hotmail.com", password: "password" },
  ];

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePassChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    console.log(users);
    e.preventDefault();
    users.map((user) => {
      if (user.email === email) {
        if (user.password === password) {
          return alert("You are in");
        }
      } else {
        return alert("You are not registered yet!");
      }
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email"> Email</label>
          <input onChange={handleEmailChange} value={email} name="email" />
        </div>
        <div>
          <label htmlFor="password"> Password</label>
          <input onChange={handlePassChange} value={password} name="password" />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
