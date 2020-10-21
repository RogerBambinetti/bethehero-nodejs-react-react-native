import React, { useEffect, useState } from 'react';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import './styles.css';

import Heroes from '../../assets/heroes.png'
import Logo from '../../assets/logo.svg'
import { useState } from 'react';

export default function Profile() {
    const [incidents, setIncidents] = useState([]);

    const history = useHistory();

    const ongName = localStorage.getItem('ongName');
    const ongId = localStorage.getItem('ongId');

    useEffect(() => {
        api.get('profile', { headers: { Authorization: ongId } })
            .then(response => {
                setIncidents(response.data);
            });
    }, [ongId]);

    async function handleDeleteIncident(id) {
        try {
            await api.delete(`incidents/${id}`, { headers: { Authorization: ongId } });
            setIncidents(incidents.filter(i => i.id !== id));
        } catch (err) {
            alert('erro');
        }
    }

    function handleLogout() {
        localStorage.clear();
        history.push('/');
    }

    return (
        <div className="profile-container">
            <header>
                <img src={Logo} alt="Logo" />
                <span>Bem vinda, {ongName}</span>
                <Link className="button">Cadastrar novo caso</Link>
                <button type="button" onClick={handleLogout}>
                    <FiPower size={16} color="#E02041" />
                </button>
            </header>
            <h1>Casos cadastrados</h1>
            <ul>
                {incidents.map(i => (
                    <li key={i.id}>
                        <strong>CASO:</strong>
                        <p>{i.title}</p>

                        <strong>DESCRIÇÃO</strong>
                        <p>{i.description}</p>

                        <strong>VALOR:</strong>
                        <p>R$ {i.value}</p>

                        <button type="button" onClick={() => handleDeleteIncident(i.id)}>
                            <FiTrash2 size={20} color="#a8a8b3" />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}