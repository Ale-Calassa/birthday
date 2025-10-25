import React, { useRef } from 'react';
import './Dashboard.css';
import cumple from '../img/cumple.png';
import birthdayMusic from '../music/music.mp3';

const Dashboard = () => {
  const audioRef = useRef(null);

  const handlePlay = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.5;
      audio.play().catch((err) => {
        console.error('Autoplay bloqueado ou erro ao tocar áudio:', err);
      });
    }
  };

  return (
    <div className="dashboard-container">
      {/* Música de fundo */}
      <audio ref={audioRef} src={birthdayMusic} preload="auto" loop />

      <div className="dashboard-content">
        <img src={cumple} alt="Feliz Aniversário" className="birthday-img" />
        <h2>Feliz Aniversário, Alesson! 🎉</h2>
        <p>Que seu dia seja repleto de alegria, conquistas e boas energias!</p>
        <button className="play-button" onClick={handlePlay}>🎵 Tocar música</button>
      </div>
    </div>
  );
};

export default Dashboard;