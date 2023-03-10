import axios from "axios";
import { useState } from "react";

export function Signup() {
  const [errors, setErrors] = useState([]);
  const [name, setName] = useState("");
  const [status, setStatus] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/users.json", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
        window.location.href = "/"; // Change this to hide a modal, redirect to a specific page, etc.
      })
      .catch((error) => {
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
        setStatus(error.response.status);
      });
  };

  return (
    <div id="signup">
      <h1>Signup</h1>

      {status ? <img src={`https://http.cat/${status}`} /> : null}

      <ul>
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <div>
          Name:{" "}
          <input
            className="form-control"
            value={name}
            onChange={(event) => setName(event.target.value)}
            name="name"
            type="text"
          />
          <small>{20 - name.length} characters remaining</small>
        </div>
        <div>
          Email: <input className="form-control" name="email" type="email" />
        </div>
        <div>
          Password: <input className="form-control" name="password" type="password" />
        </div>
        <div>
          Password confirmation: <input className="form-control" name="password_confirmation" type="password" />
        </div>
        <p></p>
        <button type="submit" className="btn btn-dark">
          Sign Up
        </button>
        <p></p>
      </form>
    </div>
  );
}
