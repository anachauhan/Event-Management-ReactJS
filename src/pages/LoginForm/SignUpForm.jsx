import React, { useState } from "react";
import styles from "./LoginForm.module.css";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users") || "[]");

    if (users.find((u) => u.email === email)) {
      alert("User already exists!");
      return;
    }

    users.push({ email, password });
    localStorage.setItem("users", JSON.stringify(users));

    alert("Signup successful!");
    navigate("/login"); // redirect back to login
  };

  return (
    <div className={styles.LoginFormPageWrapper}>
      <div className={styles.FormContainer}>
        <div className={styles.Card}>

          <h2 className={styles.Title}>Create Account</h2>

          <form className={styles.Form} onSubmit={handleSignUp}>
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

            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />

            <button className={styles.MainBtn} type="submit">
              Sign Up
            </button>

            <p className={styles.SwitchText}>
              Already have an account?{" "}
              <span
                className={styles.SwitchLink}
                onClick={() => navigate("/login")}
              >
                Login here
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

