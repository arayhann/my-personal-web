import React, { useEffect, useState } from 'react';
import WelcomePage from './Pages/WelcomePage/WelcomePages';
import AboutPage from './Pages/AboutPage/AboutPage';
import SkillsPage from './Pages/SkillsPage/SkillsPage';
import CityPage from './Pages/CityPage/CityPage';
import HobbyPage from './Pages/HobbyPage/HobbyPage';
import Level2Page from './Pages/Level2Page/Level2Page';
import MobileSkillPage from './Pages/MobileSkillPage/MobileSkillPage';
import WebSkillPage from './Pages/WebSkillPage/WebSkillPage';
import DesignSkillPage from './Pages/DesignSkillPage/DesignSkillPage';
import RoboticsSkillPage from './Pages/RoboticsSkillPage/RoboticsSkillPage';
import Level3Page from './Pages/Level3Page/Level3Page';
import Experience1Page from './Pages/Experience1Page/Experience1Page';
import Experience2Page from './Pages/Experience2Page/Experience2Page';
import Experience3Page from './Pages/Experience3Page/Experience3Page';
import Experience4Page from './Pages/Experience4Page/Experience4Page';
import Experience5Page from './Pages/Experience5Page/Experience5Page';
import FinishPage from './Pages/FinishPage/FinishPage';

import Character from './Components/Character/Character';
import NormalGround from './Components/Ground/NormalGround/NormalGround';
import DesertGround from './Components/Ground/DesertGround/DesertGround';
import CityGround from './Components/Ground/CityGround/CityGround';
import Cloud from './Components/Cloud/Cloud';
import './App.css';

function App() {
  const [loading, setLoading] = useState(
    <div className="loading-page">
      <div className="loader" />
    </div>
  );
  useEffect(() => {
    setLoading(<div></div>);
  }, []);

  return (
    <div className="App-Base">
      {loading}
      <div className="App">
        <div style={{ height: '100vh' }}>
          <Character />
        </div>
        <WelcomePage />
        <AboutPage />
        <SkillsPage />
        <CityPage />
        <HobbyPage />
        <Level2Page />
        <MobileSkillPage />
        <WebSkillPage />
        <DesignSkillPage />
        <RoboticsSkillPage />
        <Level3Page />
        <Experience1Page />
        <Experience2Page />
        <Experience3Page />
        <Experience4Page />
        <Experience5Page />
        <FinishPage />
        <Cloud />
        <NormalGround
          width={
            window.matchMedia('(max-width: 500px)').matches === true
              ? '500vw'
              : '7200px'
          }
          height="20%"
          bottom="0"
          left="0"
        />
        <DesertGround
          width={
            window.matchMedia('(max-width: 500px)').matches === true
              ? '500vw'
              : '7200px'
          }
          height="20%"
          bottom="0"
          left={
            window.matchMedia('(max-width: 500px)').matches === true
              ? '500vw'
              : '7200px'
          }
        />
        <CityGround
          width={
            window.matchMedia('(max-width: 500px)').matches === true
              ? '950vw'
              : '10080px'
          }
          height="20%"
          bottom="0"
          left={
            window.matchMedia('(max-width: 500px)').matches === true
              ? '1000vw'
              : '14400px'
          }
        />
      </div>
    </div>
  );
}

export default App;
