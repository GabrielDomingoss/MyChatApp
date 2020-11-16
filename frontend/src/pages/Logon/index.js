import React from 'react';
import api from '../../services/api';
import conversationImg from '../../assets/conversation.svg';
import logoImg from '../../assets/logo.png';
import './style.css';
export default function Logon() {
    
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="top">
                        <img className="logo" src={logoImg} width={420} alt="Be the Hero" />

                    </div>
                    <div className="in">
                        <h1>Faça seu Login</h1>
                        <div className="row">
                            <div className="col-md-8">
                                <input className="form-control" placeholder="usuário"></input>
                            </div>
                            <button className="btn btn-secondary" type="submit">Entrar</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 topz">
                    <img className="image" src={conversationImg} alt="Heroes" />
                </div>
            </div>
        </div>
    )
}