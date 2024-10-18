import './level.css';
const Level = ({ numbers, activeButtons, toggleButton, setIsTimerRunning }) => {  
  const renderButton = (num, index) => {
    const isActive = activeButtons && activeButtons[index] !== undefined ? activeButtons[index] : false;
    return (
      <button
        key={index}
        className='btn'
        style={{ 
          backgroundColor: isActive ? 'red' : 'white',  
          color: isActive ? 'white' : 'black',   
          transition: 'background-color 0.3s, color 0.3s'
        }}
        onClick={() => {
          toggleButton(index); 
          setIsTimerRunning(true);  
        }}  
      >
        {num}
      </button>
    );
  };
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }} className='box'>
      <button className='level'>10</button>
      <div className="grid-container">
        {numbers.slice(0, 5).map((num, index) => renderButton(num, index))}
        {numbers.slice(5).map((num, index) => renderButton(num, index + 5))}
      </div>
    </div>
  );
};
export default Level;