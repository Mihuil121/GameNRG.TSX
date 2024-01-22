import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NRG from '../imge/had.png';
import Slider from './slider.tsx';
import News from './news/news.tsx';
import Ot from './news/ot.tsx';
import './adaptation.css'

const Main = () => {
  const [activeTab, setActiveTab] = useState('Главная');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };


  return (
    <div className="">
      <Router>
        <div className="main">
          <div className="main-hader">
            <div className="top">
              <div className="img-main-hader">
                <img src={NRG} alt="" />
              </div>
              <div className="main-btn-div">
                <button
                  className={`main-btn ${activeTab === 'Главная' ? 'active' : ''}`}
                  onClick={() => handleTabClick('Главная')}
                >
                  Главная
                </button>
              </div>
              <div className="main-btn-div">
                <button
                  className={`main-btn ${activeTab === 'Новости' ? 'active' : ''}`}
                  onClick={() => handleTabClick('Новости')}
                >
                  Новости
                </button>
              </div>
              <div className="main-btn-div">
                <a href="https://discord.com/channels/1188902856997212210/1188903120948961450" target="_blank" rel="noopener noreferrer">
                  <button
                    className={`main-btn `}
                  >
                    Заявка
                  </button>
                </a>
              </div>
              <div className="main-btn-div">
              <a href="https://discord.com/channels/1188902856997212210/1188903120948961450" target="_blank" rel="noopener noreferrer">
                  <button
                    className={`main-btn `}
                  >
                    Заказать рекламу 
                  </button>
                </a>
              </div>
            </div>
          </div>
          <Routes>
            <Route path="/ot" element={<Ot />} />
          </Routes>
          {activeTab === 'Главная' && (
            <div className="NRG">
              <div className="NRG-border">
                <div>
                  <img src={NRG} alt="" className="img-NRG" />
                </div>
                <div className="text-NRG">
                  <p>Сервер друзей, ютуберов и стримеров по Minecraft Bedrock Edition. <br /> Энергия у нас в крови!</p>
                </div>
              </div>
            </div>
          )}
          {activeTab === 'Новости' && <News />}
        </div>
        {activeTab !== 'Новости' && <Slider />}
      </Router>
    </div>
  );
};

export default Main;
