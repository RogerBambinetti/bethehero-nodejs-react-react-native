import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import './styles.css';

import Heroes from '../../assets/heroes.png'
import Logo from '../../assets/logo.svg'

export default function Register() {
    return (
        <div className="register-container">
            <div className="content">
                <section className="form">
                    <img src={Logo} alt="Logo" />
                    <h1>Faça seu cadastro</h1>
                    <p>Cadastre-se, entre na plataforma e ajude pessoas a encontrarem casos da sua ong</p>
                    <Link to="/">
                        <FiArrowLeft size={16} color="#E02041" />
                        Já tenho cadastro
                    </Link>
                </section>
                <form>
                    <input type="text" placeholder="Nome da ONG" />
                    <input type="email" placeholder="Seu e-mail" />
                    <input type="text" placeholder="Whatsapp" />
                    <div className="input-group">
                        <input type="text" placeholder="Cidade" />
                        <input type="text" placeholder="UF" style={{width: 80}}/>
                    </div>
                    <button type="submit" className="button">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}