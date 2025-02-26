import { Link } from 'react-router-dom';
import './install.css';

function Install() {
  
    return (
      <>
        <h4>Installer Arduino IDE</h4>

        <p>For at programmere på Arduino skal vi bruge et program til det.</p>

        <p>Et program er Arduino IDE, som kan sende koden fra computer til Arduino.</p>

        <p>Man kan følge den <Link to="/forberedelse">her guide</Link> for at downloade og sætte Arduino IDE op. </p>

        <br/>

        <p>Hvis man støder på fejl efter installationen, så download <a href="https://cdn.sparkfun.com/assets/learn_tutorials/8/4/4/CH341SER.EXE">CH340 Driver</a>.</p>

      </>
    )
  }
  
  export default Install
  