import Roll from './roll';
import DarkTheme from './darkTheme';
import Level from './level';
const Game = ({ toggleTheme, isLightMode, numbers, rollNumbers, activeButtons, toggleButton, setIsTimerRunning, isTimerRunning }) => {  
  const colorRed = { color: 'red' }; 
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }} className="heading">
        <div style={{
            color: isLightMode ? 'black' : 'white',
            fontFamily: 'sans-serif',
            fontWeight: 'bold',
            marginTop: '-15px'
        }} className="best">
          <h5>Best Time: <span style={colorRed}>105.92s</span> With <span style={colorRed}>39 </span>rolls</h5>
        </div>         
        <h1 style={{
            color: isLightMode ? 'black' : 'white',  
            fontFamily: 'sans-serif', 
            fontSize: '70px',        
        }} className="nameGame">Tenzies!</h1>           
        <DarkTheme toggleTheme={toggleTheme} isLightMode={isLightMode} />
      </div>
      <p style={{
          color: isLightMode ? 'black' : 'white',
          fontFamily: 'sans-serif',
          marginLeft: '37%',
          marginTop: '-30px' 
          }} className="description">
       match all <span style={colorRed}>10</span> of your dice to the <span style={colorRed}>same</span> number
      </p>
      <Level 
        numbers={numbers} 
        activeButtons={activeButtons} 
        toggleButton={toggleButton} 
        setIsTimerRunning={setIsTimerRunning}   
      />
      <Roll
        isLightMode={isLightMode}
        rollNumbers={rollNumbers} 
        isTimerRunning={isTimerRunning}
       />  
    </div>
  );
};
export default Game;
