import { useState, useEffect } from 'react';
import Game from './components/game';   
import './App.css';
import Footer from './components/footer';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
function App() {
  const [isLightMode, setIsLightMode] = useState(false);
  const [numbers, setNumbers] = useState(Array.from({ length: 10 }, () => Math.floor(Math.random() * 9) + 1));
  const [activeButtons, setActiveButtons] = useState({});
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [timer, setTimer] = useState(0);
  const [rolls, setRolls] = useState(0);
  const [gameFinished, setGameFinished] = useState(false);
  useEffect(() => {
    let interval = null;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setTimer(prevTime => prevTime + 0.05);
      }, 50);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning]);
  const toggleTheme = () => {
    setIsLightMode(!isLightMode);
  };
  const rollNumbers = () => {
    setNumbers(prevNumbers =>
      prevNumbers.map((num, index) => (activeButtons[index] ? num : Math.floor(Math.random() * 9) + 1))
    );
    setRolls(rolls + 1);
  };
  const toggleButton = (index) => {
    setActiveButtons(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
    if (!isTimerRunning) {
      setIsTimerRunning(true);
    }
  }; 
  useEffect(() => {
    const allEqual = numbers.every(num => num === numbers[0]);
    if (allEqual && Object.keys(activeButtons).length === 10) {
      setGameFinished(true);
      setIsTimerRunning(false);
    }
  }, [numbers, activeButtons]);
  const playAgain = () => {
    setNumbers(Array.from({ length: 10 }, () => Math.floor(Math.random() * 9) + 1));
    setActiveButtons({});
    setIsTimerRunning(false);
    setTimer(0);
    setRolls(0);
    setGameFinished(false);
  };
  const colorRed = {
    color: 'red'
  }; 
  return (
    <div className='App' style={{
      background: isLightMode 
        ? 'linear-gradient(270deg, rgb(216, 234, 255), rgb(231, 237, 242))' 
        : 'linear-gradient(270deg, rgb(34, 51, 88), rgb(24, 37, 64))'
    }}>
      {gameFinished ? (
        <div className="game-finished">  
        <div> 
        <div className='parent3'>
        <LightModeOutlinedIcon className='light3' style={{
        color: isLightMode ? 'black' : 'white'
        }}/>
        <div className='range3' onClick={toggleTheme}>
        <div className='circle3' style={{
          left: isLightMode ? '5px' : '40px', 
          transition: 'left 0.3s ease',      
         }}></div>
        </div>
        <DarkModeOutlinedIcon className={`dark3`} style={{
        color: isLightMode ? 'black' : 'white'
        }} />
        </div>   
         </div>
          <h1 style={{ color: isLightMode ? 'black' : 'white' }}>Good job!</h1>
          <p style={{ color: isLightMode ? 'black' : 'white' }}>You finished with <span style={colorRed}>{rolls}</span> rolls</p>
          <p style={{ color: isLightMode ? 'black' : 'white' }}>Time: <span style={colorRed}>{timer.toFixed(2)} </span> seconds</p>
          <button onClick={playAgain} style={{
            backgroundColor: 'red',
            color: 'white',
            padding: '10px 20px',
            fontSize: '18px',
            borderRadius: '5px',
            cursor: 'pointer',
            outline: 'none',
            border: 'none'            
          }}>Play Again</button>
          <div className='made2' style={{
            color: isLightMode ? 'black' : 'white'
          }}>
          <p>Made with ☕ by <a href="https://www.linkedin.com/in/mohannad-waheeb-660501319/" style={colorRed} target='_blank'>Mohannad</a></p>
        </div>
        </div>
      ) : (
        <>
          <Game
            toggleTheme={toggleTheme}
            isLightMode={isLightMode}
            numbers={numbers}
            rollNumbers={rollNumbers}
            toggleButton={toggleButton}
            activeButtons={activeButtons}
            setIsTimerRunning={setIsTimerRunning}  
            isTimerRunning={isTimerRunning}  
          />
          <Footer 
            toggleTheme={toggleTheme}
            isLightMode={isLightMode}
          />
        </>
      )}
    </div>
  );
}

export default App;