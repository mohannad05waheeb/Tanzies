import { useState, useEffect } from 'react';
import CachedIcon from '@mui/icons-material/Cached';
import './roll.css';
const Roll = ({ isLightMode, rollNumbers, isTimerRunning }) => {
  const [timer, setTimer] = useState(0);
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
  const colorRed = { 
    color: 'red'
  };
  return (
    <div>
      <p className='para' style={{
          color: isLightMode ? 'black' : 'white'  
      }}>
        Press <span style={colorRed}>SPACE</span> or
      </p> 
      <div className='boxRoll'>
        <CachedIcon className='roll' style={{
          color: isLightMode ? 'black' : 'white'
        }} 
        onClick={() => {
          window.location.reload()
        }}        
        />
        <button className='button' onClick={rollNumbers}>Roll</button>
      </div>
      <p style={{
        color: isLightMode ? 'black' : 'white'
      }} className='time'>
        Timer: <span style={colorRed}>{timer.toFixed(2)}</span>  
      </p>
    </div>
  );
};
export default Roll;