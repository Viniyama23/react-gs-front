import React from 'react'
import './Footer.scss'
import { Link } from 'react-router-dom'
const index = () => {
  return (
    <>
        <footer>
          <div className='footer-max'>

            <div className='logo-footer'>
                <h2>Health Tech</h2>
            </div>
            <div className="desenvolv">
                <h3>Desenvolvedores</h3>
                <p>Vinicius santos yamashita de farias</p>
                <p>Rafael carvalho mattos</p>
            </div>
          </div>
            <Link to=''>2023 | Todos os direitos estão reservados!</Link>
        </footer>
    </>
  )
}

export default index