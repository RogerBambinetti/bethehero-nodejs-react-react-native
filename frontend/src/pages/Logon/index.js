import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import './styles.css';

import Heroes from '../../assets/heroes.png'
import Logo from '../../assets/logo.svg'

export default function Logon() {
    return (
        <div className="logon-container">
            <section className="form">
                <img src={Logo} alt="Logo" />
                <form action="">
                    <h1>Faça seu logon</h1>
                    <input type="text" placeholder="Sua ID" />
                    <button type="submit">Entrar</button>
                </form>
                <a href="/register">
                    <FiLogIn size={16} color="#E02041" />
                  Não tenho cadastro</a>
            </section>
            <img src={Heroes} alt="Heroes" />
        </div>
    )
}