import React, { useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import './styles.css';

import Logo from '../../assets/logo.svg';

import api from '../../services/api';

export default function NewIncident() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    const history = useHistory();

    const ongId = localStorage.getItem('ongId');

    async function handleNewIncident(e) {
        e.preventDefault();
        const data = { title, description, value };
        try {
            await api.post('incidents', data, { headers: { Authorization: ongId } })
            history.push('/profile');
        } catch (err) {
            alert('Erro ao cadastrar caso');
        }
    }

    return (
        <div className="new-incident-container">
            <div className="content">
                <section className="form">
                    <img src={Logo} alt="Logo" />
                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>
                    <Link to="/profile">
                        <FiArrowLeft size={16} color="#E02041" />
                        Voltar para Home
                    </Link>
                </section>
                <form>
                    <input type="text" placeholder="Título do caso" value={title} onChange={e => setTitle(e.target.value)} />
                    <textarea placeholder="Descrição" value={description} onChange={e => setDescription(e.target.value)} />
                    <input type="text" placeholder="Valor em reais" value={value} onChange={e => setValue(e.target.value)} />
                    <button type="submit" className="button" onClick={handleNewIncident}>Cadastrar</button>
                </form>
            </div>
        </div>
    )
}