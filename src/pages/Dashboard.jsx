import React from 'react';
import './Dashboard.css'; // Certifique-se de criar esse arquivo
import cumple from '../img/cumple.png'; // ajuste o caminho conforme sua estrutura

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        <img src={cumple} alt="Feliz Aniversário" className="birthday-img" />
        <h2>Feliz Aniversário, Alesson! 🎉</h2>
        <p>Que seu dia seja repleto de alegria, conquistas e boas energias!</p>
      </div>
    </div>
  );
};

export default Dashboard;