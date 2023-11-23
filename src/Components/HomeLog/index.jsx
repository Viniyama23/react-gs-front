// Home.jsx
import React from 'react';
import './HomeLof.scss'
import { useState } from 'react';


const Home = () => {
  const handleLogout = () => {
    // Limpar dados da sessão
    sessionStorage.clear();

    // Redirecionar para a tela de registro
    window.location.href = '/register'; // ou use o react-router-dom para navegação programática
  };

  // Obter informações do usuário da sessão
  const userEmail = sessionStorage.getItem('userEmail');
  const userName = sessionStorage.getItem('userName');

  
  return (
    <>
      <section className="home-log">

        <div className='cabecalho'>
          <h2>Bem vindo ao home</h2>
          <div className='user-div'>
            {userName && userEmail ? (
              <p>
                Olá, <span>{userName} você está cadastrado com o Email: ({userEmail})</span>
              </p>
            ) : null}
            <button onClick={handleLogout}>Logout</button>
          </div>
        </div> 
      </section>
    </>
  );
};

export default Home;
