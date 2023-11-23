import { Link } from 'react-router-dom';

const index = () => {
   
    const handleGoToRegister = () => {
        showNavbar
        // Redirecionar para a tela de registro
        window.location.href = '/register'; // ou use o react-router-dom para navegação programática
      };
  return (
    <nav className='menu-nav'>
    <h1>
      <Link to="/">Health</Link>
      <Link to="/">Tech</Link>
    </h1>

    <ul>
      <li>
      <Link to="/register" onClick={handleGoToRegister}>Login</Link>
      </li>
      <li>
        <Link to="/">Home</Link>
      </li>
    </ul>
  </nav>
  )
}

export default index