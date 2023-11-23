import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import Home from "../HomeLog";
import { SHA256 } from "crypto-js"; // Importe a função SHA256

function Login() {
  const [emaillog, setEmaillog] = useState("");
  const [passwordlog, setPasswordlog] = useState("");

  const [flag, setFlag] = useState(false);
  const [home, setHome] = useState(true);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/usuarios");
      const data = await response.json();

      // Calcular o hash SHA-256 da senha fornecida
      const hashedPasswordInput = SHA256(passwordlog).toString();

      const user = data.find(
        (u) => u.email === emaillog && u.password === hashedPasswordInput
      );

      if (!user) {
        setFlag(true);
      } else {
        // Armazenar informações na sessão
        sessionStorage.setItem("userEmail", user.email);
        sessionStorage.setItem("userName", user.name); // Adicione esta linha para armazenar o nome do usuário
        sessionStorage.setItem("isLoggedIn", "true"); // Adiciona esta linha

        setHome(!home);
        setFlag(false);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleGoToRegister = () => {
    // Redirecionar para a tela de registro
    window.location.href = '/register'; // ou use o react-router-dom para navegação programática
  };

  return (
    <div>
      {home ? (
        <form onSubmit={handleLogin}>
          <h3>Login</h3>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Coloque seu email"
              onChange={(event) => setEmaillog(event.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Senha</label>
            <input
              type="password"
              className="form-control"
              placeholder="Digite sua senha"
              onChange={(event) => setPasswordlog(event.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-dark btn-lg btn-block">
            Login
          </button>

          {flag && (
            <Alert color="primary" variant="warning">
              Preencha as informações corretas, caso contrário, continue tentando.
            </Alert>
          )}

          {/* Botão para ir para a tela de registro */}
          <button
            type="button"
            className="btn btn-link"
            onClick={handleGoToRegister}
          >
            Ir para registro
          </button>
        </form>
      ) : (
        <Home />
      )}
    </div>
  );
}

export default Login;