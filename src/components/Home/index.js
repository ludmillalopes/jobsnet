import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import marca from './marca.PNG';
import './style.css';
import axios from 'axios';
import AddCurriculo from '../FormCurriculo/index';


const Home = () => {
  
  const createUser = async () => {
    const user = await axios.post('https://jobsnetvagas.herokuapp.com/signUp', form);
    if(user.status === 200) {
      alert('Sua conta foi criada com sucesso!\nCadastre o seu currículo.');
    } else {
        alert('Ops! Algo deu errado!');
      }
  };
  
  const [form, setForm] = useState({
    email: '',
    password: '',
  })
  
  useEffect(() => {
    console.log(form);
  }, [form]);

  return (
    <>
      <main className="intro">
        <div className="intro_header">
          <div className="container">
            <img className="intro_header-marca" src={marca} alt="Marca da JobsNET" />
          </div>
        </div>

        <div className="intro_cadUsuario container">
          <div className="intro_cadUsuario-item">
            <h1>Está em busca da vaga dos seus sonhos?</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ullam rem possimus unde Lorem ipsum dolor sit amet consectetur adipisicing elit. sed assumenda!</p>
          </div>

          <div className="intro_cadUsuario-item formSide">
            <h2>Faça já o seu cadastro</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, eius.</p>
            
            <form className="intro_cadUsiario-form">
              <div className="form-item">
                <label htmlFor="email">E-mail<span> *</span></label>
                <input 
                  type="email"
                  id="email"
                  name="email"
                  placeholder="E-mail"
                  value={form.email}
                  required
                  onChange={(e) => {
                    setForm({ ...form, email: e.target.value });
                  }}
                />
              </div>
              <div className="form-item">
                <label htmlFor="password">Senha<span> *</span></label>
                <input 
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Crie sua senha"
                  value={form.password}
                  required
                  onChange={(e) => {
                    setForm({ ...form, password: e.target.value });
                  }}
                />
              </div>
              <button 
                className="intro_cadUsiario-btn"
                id="cadUsiario-btn"
                onClick={() => {
                  createUser();
                  ReactDOM.render(
                    <AddCurriculo />,
                    document.getElementById('root')
                  );
                }}
              >
                Vamos lá!
              </button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;