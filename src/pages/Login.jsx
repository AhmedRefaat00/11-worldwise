import { useEffect, useState } from "react";
import styles from "./Login.module.css";
import PageNav from "../components/pageNav/PageNav";
import Button from "../components/Button";
import { useAuth } from "../contexts/AuthProvider";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("ahmedrefaat00ar@gmail.com");
  const [password, setPassword] = useState("Ahmed");
  const { dispatch, isAuthenticated } = useAuth()
  const primaryUser = {
    name: "A.Refaat",
    email: email,
    password: password,
    avatar: "https://i.pravatar.cc/100?u=zz",
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch({ type: "login", payload: primaryUser })

  }
  useEffect(() => {
    if (isAuthenticated)
      navigate("/app");
  }, [isAuthenticated, navigate])




  return (
    <main className={styles.login}>
      <PageNav />
      <form className={styles.form} onSubmit={e => handleSubmit(e)}>
        <div className={styles.row}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        {isAuthenticated === false && <p style={{ color: 'red' }}>Email address is unknown. Check again or try with correct Email & password.</p>}

        <div>
          <Button type='primary' >Login</Button>
        </div>
      </form>
    </main>
  );
}
