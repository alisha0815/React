import React, { useState } from "react";

const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let users = [
    {
      id: 1,
      email: "mathias01@gmail.com",
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
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label> Email</label>
          <input onChange={handleEmailChange} value={email} />
        </div>
        <div>
          <label> Password</label>
          <input onChange={handlePassChange} value={password} />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
