import React, { useState } from "react";
import { Form, Alert } from "react-bootstrap";
import Login from "../Login";
import { SHA256 } from "crypto-js";
import './Register.scss'
function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [profession, setProfession] = useState("");

  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(true);

  async function handleFormSubmit(e) {
    e.preventDefault();
  
    try {
      // Calcular o hash SHA-256 da senha
      const hashedPassword = SHA256(password).toString();
  
      const response = await fetch("http://localhost:3001/usuarios", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password: hashedPassword, // Salvar o hash da senha
          phone,
          profession,
        }),
      });
  
      if (!response.ok) {
        throw new Error("Error creating user");
      }
  
      // Limpar dados da sessão
      sessionStorage.clear();
  
      // Salvar hash da senha na sessão
      sessionStorage.setItem("hashedPassword", hashedPassword);
      sessionStorage.setItem("isLoggedIn", "true"); // Adiciona esta linha
      
      setFlag(false);
      setLogin(!login);
    } catch (error) {
      console.error("Error creating user:", error);
      setFlag(true);
    }
  }

  function handleClick() {
    setLogin(!login);
  }

  return (
    <>
      <section className="login-section">
        {" "}
        {login ? (
          <form onSubmit={handleFormSubmit}>
            <h3>Registro</h3>

            <div className="form-group">
              <label>Nome</label>
              <input
                type="text"
                className="form-control"
                placeholder="Digite seu nome completo"
                name="name"
                onChange={(event) => setName(event.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Digite seu email"
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Senha</label>
              <input
                type="password"
                className="form-control"
                placeholder="Digite sua senha"
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Número de telefone</label>
              <input
                type="Phone"
                className="form-control"
                placeholder="Digite seu número de telefone"
                onChange={(event) => setPhone(event.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Escolha sua profissão</label>
              <Form.Control
                as="select"
                onChange={(event) => setProfession(event.target.value)}
              >
                <option>-</option>
                <option>Médico</option>
                <option>Recepcionista</option>
                <option>Outros</option>
                <option>N/A</option>
              </Form.Control>
            </div>

            <button type="submit" className="btn btn-dark btn-lg btn-block">
              Registrar
            </button>
            <p onClick={handleClick} className="forgot-password text-right">
              <a className="japossuilogin">Já possui{" "}log in?</a>
            </p>
            {flag && (
              <Alert color="primary" variant="danger">
                Entendi, você está com pressa! Mas cada campo é importante!
              </Alert>
            )}
          </form>
        ) : (
          <Login />
        )}
      </section>
    </>
  );
}

export default Registration;