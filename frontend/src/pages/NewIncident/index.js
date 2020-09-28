import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import './styles.css';

import Heroes from '../../assets/heroes.png'
import Logo from '../../assets/logo.svg'

export default function NewIncident() {
    return (
        <div className="new-incident-container">
            <div className="content">
                <section className="form">
                    <img src={Logo} alt="Logo" />
                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>
                    <Link to="/">
                        <FiArrowLeft size={16} color="#E02041" />
                        Voltar para Home
                    </Link>
                </section>
                <form>
                    <input type="text" placeholder="Título do caso" />
                    <textarea placeholder="Descrição" />
                    <input type="textArea" placeholder="Valor em reais" />
                    <button type="submit" className="button">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}