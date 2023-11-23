import React from 'react'
import { Link } from 'react-router-dom'
import './Home.scss'
import Vantagens from '../../Components/Vantagens'

const index = () => {
  return (
    <>
    <section className='home-section'>
        <div className="container-max">

          <div className="container">

            <div className="imagem-impacto">
              <img src="src/assets/eletrocardiograma.jpg" alt="imagem-de-impacto" />
            </div>

            <div className="caixa-inferior">
              <h2>Heart Analyneser</h2>
              <p>Nosas solução é uma triagem com o eletrocardiograma,<br/>para ser mais rapido para o paciente, e auxiliar o médico em suas decisões.</p>
            </div>
            
            <button>Mais informações</button>
          </div>
          <article>
            <div className='lateral'>
              <h3>Heart analyzer</h3>
              <p>O Heart analyser é um sistema de triagem capaz de coletar seus dados e junto com um dispositivo de detecção de pulso ele irá fazer um eletrocardiograma.</p>
              <h3>Sua consulta mais rapido</h3>
              <p>Nossa solução é capaz de reduzir o tempo do paciente até a hora da consulta,
                 e também capaz de auxiliar o médico, mostrando anomalias no ECG para assim o médico dizer o tratamento</p>
              <h3>Como ele funcionará?</h3>
              <p>O nosso programa em python marcará as consultas para os pacientes e também um sistema de controle para médicos com opções para ver dados dos pacientes,
                     ver as consultas marcadas e monitorar o ECG dos pacientes</p>
            </div>
          </article>
        </div>
        <h2 id='vtng'>Vantagens</h2>
        <Vantagens/>
      </section>
  </>
  )
}

export default index