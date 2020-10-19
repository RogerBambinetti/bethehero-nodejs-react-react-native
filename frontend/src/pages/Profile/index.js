import React, { useEffect, useState } from 'react';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import './styles.css';

import Heroes from '../../assets/heroes.png'
import Logo from '../../assets/logo.svg'
import { useState } from 'react';

export default function Profile() {
    const [incidents, setIncidents] = useState([]);

    const ongName = localStorage.getItem('ongName');
    const ongId = localStorage.getItem('ongId');

    useEffect(() => {
        api.get('profile', { headers: { Authorization: ongId } })
            .then(response => {
                setIncidents(response.data);
            });
    }, [ongId]);

    return (
        <div className="profile-container">
            <header>
                <img src={Logo} alt="Logo" />
                <span>Bem vinda, {ongName}</span>
                <Link className="button">Cadastrar novo caso</Link>
                <button type="button">
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
                        <p>{i.value}</p>

                        <button type="button">
                            <FiTrash2 size={20} color="#a8a8b3" />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}