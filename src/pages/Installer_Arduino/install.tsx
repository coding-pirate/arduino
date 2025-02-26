import { Link } from 'react-router-dom';
import './install.css';

function Install() {
  
    return (
      <>
        <h4>Installer Arduino IDE</h4>

        <p>For at programmere på Arduino skal vi bruge et program til det.</p>

        <p>Et program er Arduino IDE, som kan sende koden fra computer til Arduino.</p>

        <p>Man kan downloade det på <Link to="https://www.arduino.cc/en/software">https://www.arduino.cc/en/software</Link> eller ved at følge den <Link to="/forberedelse">her guide</Link>. </p>

        <a href="https://cdn.sparkfun.com/assets/learn_tutorials/8/4/4/CH341SER.EXE">CH340 Driver</a>

      </>
    )
  }
  
  export default Install
  