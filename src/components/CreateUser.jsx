import React, { useState } from "react";

const CreateUser = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://631072be36e6a2a04eee964f.mockapi.io/UserData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, age, city }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "success") {
          setMessage("User created successfully!");
        } else {
          setMessage("Error creating user");
        }
      })
      .catch((error) => {
        console.log(error);
        setMessage("Error creating user");
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group d-flex flex-column align-items-center justify-content-center row-gap-2 column-gap-3 m-5" >
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Age:
          <input
            type="text"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </label>
        <br />
        <label>
          City:
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </label>
        <br />
        <button type="submit" className="btn btn-info">Create User</button>
        {message && <p>{message}</p>}
      </div>
    </form>
  );
};

export default CreateUser;
