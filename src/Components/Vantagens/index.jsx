import React from 'react'
import './Vantagens.scss'
const index = () => {
  return (
    <div className='box-vants'>
        <div className="box-um">
            <div className='card-imagem'>
            <img src="https://cdn-icons-png.flaticon.com/512/2436/2436212.png" alt="imagem-home" />
            </div>
            <div className="text">
                <h3>Rápidez e eficiência</h3>
                <p>Utilizando o Heart analynezer você terá suas consultas muito mais rápido.</p>
            </div>
        </div>
        <div className="box-um">
            <div className='card-imagem'>
            <img src="https://cdn-icons-png.flaticon.com/512/1738/1738766.png" alt="imagem-home" />
            </div>
            <div className="text">
                <h3>Facilidade nas consultas</h3>
                <p>Você não precisará realizar o exame ECG, pois nosso sistema realizará previamente.</p>
            </div>
        </div>
        <div className="box-um">
            <div className='card-imagem'>
            <img src="https://cdn-icons-png.flaticon.com/512/2618/2618626.png" alt="imagem-home" />
            </div>
            <div className="text">
                <h3>Maior controle para médicos</h3>
                <p>Com o Heart analynezer os médicos poderá pesquisar rapidamente consultas marcads e dadaos de pacientes.</p>
            </div>
        </div>
    </div>
  )
}

export default index