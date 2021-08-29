import { useState, useEffect } from 'react';
import marcaHorizontal from './marca-horizontal.PNG';
import '../FormCurriculo/style.css';
import axios from 'axios';
import { cpf } from 'cpf-cnpj-validator';


const AddCurriculo = () => {

  const validacaoCpf = async () => {
    if(cpf.isValid(form.cpf)) {
      console.log('CPF está ok.');
    } else {
      alert ('CPF inválido.');
      setForm({ ...form, cpf: ''});
    }
  }

  const fetchAddress = async () => {
    const address = await axios.get(`https://viacep.com.br/ws/${form.cep}/json/`);
    setForm({
      ...form,
        logradouro: address.data.logradouro,
        bairro: address.data.bairro,
        cidade: address.data.localidade,
        estado: address.data.uf
    });
  }
  
  const createCandidate = async () => {
    const user = await axios.post('https://jobsnetvagas.herokuapp.com/register', form);
    if(user.status === 200) {
      alert('Seu cadastro foi concluído com sucesso!');
    } else {
        alert('Ops! Algo deu errado!');
      }
  };
  
  const [form, setForm] = useState({
    nome: '',
    cpf: '',
    nascimento: '',
    cep: '',
    logradouro: '',
    numero: '',
    complemento: '',
    bairro: '',
    cidade: '',
    estado: '',
    emailForm: '',
    celular: '',
    profissao: '',
    file: '',
  })
  
  useEffect(() => {
    console.log(form);
  }, [form]);
  
  return (
    <>
      <section id="cadCurriculo" className="cadCurriculo">
        <form className="cadCurriculo-form">
          <div className="usuario cadCurriculo-form_item">
            <div className="nome">
              <label htmlFor="nome">Nome Completo<span> *</span></label>
              <input
                type="text"
                placeholder="Nome Completo"
                id="nome"
                name="nome"
                value={form.nome}
                required
                onChange={(e) => {
                  setForm({ ...form, nome: e.target.value });
                }}
              />
            </div>      
            <div className="cpf">
              <label htmlFor="cpf">CPF<span> *</span></label>
              <input 
                type="text"
                id="cpf"
                name="cpf"
                value={form.cpf}
                placeholder="00000000000"
                maxLength="11"
                required 
                onChange={(e) => {
                  setForm({ ...form, cpf: e.target.value });
                }}
                onBlur={(e) => {
                  validacaoCpf()
                }}
              />
            </div>      
            <div className="nascimento">
              <label htmlFor="nascimento">Nascimento<span> *</span></label>
              <input
                type="date"
                id="nascimento"
                name="nascimento"
                value={form.nascimento}
                required
                onChange={(e) => {
                  setForm({ ...form, nascimento: e.target.value });
                }} 
              />
            </div>    
          </div>

          <div className="endereco cadCurriculo-form_item">
            <div className="cep">
              <label htmlFor="cep">CEP<span> *</span></label>
              <input
                type="text"
                id="cep"
                name="cep"
                value={form.cep}
                placeholder="00000000"
                maxLength="8"
                required
                onChange={(e) => {
                  setForm({ ...form, cep: e.target.value });
                }}
                onBlur={() => {
                  fetchAddress();
                }}
              />
            </div>
            <div className="logradouro">
              <label htmlFor="logradouro">Logradouro<span> *</span></label>
              <input
                type="text"
                id="logradouro"
                name="logradouro"
                value={form.logradouro}
                placeholder="Rua, Avenida..."
                required
                onChange={(e) => {
                  setForm({ ...form, logradouro: e.target.value });
                }}
              />
            </div>
            <div className="numero">
              <label htmlFor="numero">Número<span> *</span></label>
              <input
                type="text"
                id="numero"
                name="numero"
                value={form.numero}
                placeholder="000"
                required
                onChange={(e) => {
                  setForm({ ...form, numero: e.target.value });
                }}
              />
            </div>
            <div className="complemento">
              <label htmlFor="complemento">Complemento</label>
              <input
                type="text"
                id="complemento"
                name="complemento"
                value={form.complemento}
                placeholder="000"
                onChange={(e) => {
                  setForm({ ...form, complemento: e.target.value });
                }}
              />
            </div>
            <div className="bairro">
              <label htmlFor="bairro">Bairro<span> *</span></label>
              <input
                type="text"
                id="bairro"
                name="bairro"
                value={form.bairro}
                placeholder="Bairro"
                required
                onChange={(e) => {
                  setForm({ ...form, bairro: e.target.value });
                }}
              />
            </div>
            <div className="cidade">
              <label htmlFor="cidade">Cidade<span> *</span></label>
              <input
                type="text"
                id="cidade"
                name="cidade"
                value={form.cidade}
                placeholder="Cidade"
                required
                onChange={(e) => {
                  setForm({ ...form, cidade: e.target.value });
                }}
              />
            </div>
            <div className="estado">  
              <label htmlFor="estado">Estado</label>
              <input
                type="text"
                id="estado"
                name="estado"
                value={form.estado}
                placeholder="Estado"
                required
                onChange={(e) => {
                  setForm({ ...form, estado: e.target.value });
                }}
              />
            </div>        
          </div>

          <div className="contato cadCurriculo-form_item">
            <div className="emailForm">
              <label htmlFor="emailForm">E-mail<span> *</span></label>
              <input
                type="email"
                id="emailForm"
                name="emailForm"
                value={form.emailForm}
                placeholder="E-mail"
                required
                onChange={(e) => {
                  setForm({ ...form, emailForm: e.target.value });
                }}
              />
            </div>
            <div className="celular">
              <label htmlFor="celular">Celular<span> *</span></label>
              <input
                type="text"
                id="celular"
                name="celular"
                value={form.celular}
                placeholder="00000000000"
                maxLength="11"
                required
                onChange={(e) => {
                  setForm({ ...form, celular: e.target.value });
                }}
              />
            </div>
          </div>

          <div className="profissao cadCurriculo-form_item">
            <label htmlFor="profissao">Profissão<span> *</span></label>
            <input
              type="text"
              id="profissao"
              name="profissao"
              value={form.profissao}
              placeholder="Profissão"
              required
              onChange={(e) => {
                setForm({ ...form, profissao: e.target.value });
              }}
            />
          </div>
          <div className="addCurriculo">
            <label htmlFor="file">Selecione o seu currículo</label>
            <input
              type="file"
              id="file"
              name="file"
              value={form.file}
              required
              onChange={(e) => {
                setForm({ ...form, file: e.target.value });
              }}
            />        
          </div>    
          
          <button
            className="cadCurriculo-btn"
            type="submit"
            onClick={() => createCandidate()}>
              Enviar!
          </button>
        </form>

        <div className="footer">
          <div className="footer container">
            <img
              className="footer-marca"
              src={marcaHorizontal}
              alt="Marda da JobsNET"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default AddCurriculo;