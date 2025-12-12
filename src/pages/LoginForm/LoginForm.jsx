import React, { useState } from "react";
import styles from "./LoginForm.module.css";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      alert("Login successful!");
      navigate("/"); // redirect to homepage
    } else {
      alert("Invalid email or password!");
    }
  };

  return (
    <div className={styles.LoginFormPageWrapper}>
      <div className={styles.FormContainer}>
        <div className={styles.Card}>

          <h2 className={styles.Title}>Welcome Back</h2>

          <form className={styles.Form} onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <div className={styles.HelperText}>Forgot Password?</div>

            <button className={styles.MainBtn} type="submit">
              Login
            </button>

            <p className={styles.SwitchText}>
              Not a Member?{" "}
              <span
                className={styles.SwitchLink}
                onClick={() => navigate("/signup")}
              >
                Signup now
              </span>
            </p>
          </form>

          <button className={styles.HomeBtn}>
            <span className={styles.HomeLink} onClick={() => navigate("/")}>
              Home
            </span>
          </button>

        </div>
      </div>
    </div>
  );
}
