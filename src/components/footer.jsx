import './footer.css';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
const Footer = ({ toggleTheme , isLightMode }) => {
    const colorRed = {
        color: 'red'
    }
    return (
        <div>
        <div className='footer'>
        <div style={{
            color: isLightMode ? 'black' : 'white',          
        }} className="best2">
          <h5>Best Time: <span style={colorRed}>105.92s</span> With <span style={colorRed}>39 </span>rolls</h5>
        </div>  
        <div className='parent2'>
        <LightModeOutlinedIcon className='light2' style={{
          color: isLightMode ? 'black' : 'white'
        }}/>
        <div className='range2' onClick={toggleTheme}>
          <div className='circle2' style={{
            left: isLightMode ? '5px' : '40px', 
            transition: 'left 0.3s ease',      
          }}></div>
        </div>
        <DarkModeOutlinedIcon className={`dark2`} style={{
          color: isLightMode ? 'black' : 'white'
        }} /> 
        </div> 
        </div>
        <div className='made' style={{
            color: isLightMode ? 'black' : 'white'
        }}>
            <p>Made with ☕ by <a href="https://www.linkedin.com/in/mohannad-waheeb-660501319/" style={colorRed} target='_blank'>Mohannad</a></p>
        </div>
        </div>
    );
};
export default Footer;