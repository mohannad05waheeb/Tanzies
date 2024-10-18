import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import './darkTheme.css';
const DarkTheme = ({ toggleTheme, isLightMode }) => { 
  return (    
    <div className='parent'>
      <LightModeOutlinedIcon className='light' style={{
        color: isLightMode ? 'black' : 'white'
      }}/>
      <div className='range' onClick={toggleTheme}>
        <div className='circle' style={{
          left: isLightMode ? '5px' : '40px', 
          transition: 'left 0.3s ease',      
        }}></div>
      </div>
      <DarkModeOutlinedIcon className={`dark`} style={{
        color: isLightMode ? 'black' : 'white'
      }} />
    </div>     
  );
};

export default DarkTheme;