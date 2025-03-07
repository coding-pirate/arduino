import React from 'react';
import './eksempel-1.css'; 

const Eksempel1: React.FC = () => {
  // Function to copy code to clipboard
  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code).then(() => {
      alert('Koden er kopieret til udklipsholderen!'); 
    }).catch(err => {
      console.error('Fejl ved kopiering af kode: ', err); 
    });
  };

  return (
    <>
      <h4>Eksempel 1 - LED</h4>
      <p>Det første vi skal lave er at få et lys til at blinke.</p>
      <p>Nedenfor kan man se hvordan vores komponenter skal kobles sammen.</p>

      <img
        src="eksempel1/Fritzing1.png"
        className="figure-img img-fluid rounded"
        alt="Trin 1"
      />

      <h6>Kode eksempel 1</h6>
      <p>I setup() ændrer vi vores pin til at kunne tænde og slukke som hedder OUTPUT</p>
      <p>I loop() tænder vi lyset, venter 1 sekund, slukker lyset og så venter 1 sekund mere.</p>

      {/* 1. kode eksempel */}
      <div className="code-container">
        <pre>
          <code>
            <span className="keyword">void</span> <span className="function">setup</span>() {'{'}
            {'\n'}
            <span className="function">pinMode</span>(<span className="literal">7</span>, <span className="constant">OUTPUT</span>); <span className="comment">// Sæt LED pin som output</span>
            {'\n}'}
            {'\n'}
            <span className="keyword">void</span> <span className="function">loop</span>() {'{'}
            {'\n'}
            <span className="function">digitalWrite</span>(<span className="literal">7</span>, <span className="constant">HIGH</span>); <span className="comment">// Tænd LED lys.</span>
            {'\n'}
            <span className="function">delay</span>(<span className="literal">1000</span>); <span className="comment">// Vent 1 sekund.</span>
            {'\n'}
            <span className="function">digitalWrite</span>(<span className="literal">7</span>, <span className="constant">LOW</span>); <span className="comment">// Sluk LED lys.</span>
            {'\n'}
            <span className="function">delay</span>(<span className="literal">1000</span>); <span className="comment">// Vent 1 sekund.</span>
            {'\n}'}
          </code>
        </pre>
        <button className="copy-button" onClick={() => copyCode(`
void setup() {
  pinMode(7, OUTPUT); // Sæt LED pin som output
}

void loop() {
  digitalWrite(7, HIGH); // Tænd LED lys.
  delay(1000); // Vent 1 sekund.
  digitalWrite(7, LOW); // Sluk LED lys.
  delay(1000); // Vent 1 sekund.
}`
          )}>
          Kopier kode
        </button>
      </div>

      <br/>

      <h6>Kode eksempel 2</h6>
      <p>I stedet for at skrive 7, så laver vi en variabel som hedder ledPin.</p>

      {/* 2. kode eksempel */}
      <div className="code-container">
        <pre>
          <code>
            <span className="keyword">const</span> <span className="type">int</span> <span className="variable">ledPin</span> = <span className="literal">7</span>;
            {'\n'}
            {'\n'}
            <span className="keyword">void</span> <span className="function">setup</span>() {'{'}
            {'\n'}    
            <span className="function">pinMode</span>(<span className="variable">ledPin</span>, <span className="constant">OUTPUT</span>); <span className="comment">// Sæt LED pin som output</span>
            {'\n}'}
            {'\n'}
            <span className="keyword">void</span> <span className="function">loop</span>() {'{'}
            {'\n'}    
            <span className="function">digitalWrite</span>(<span className="variable">ledPin</span>, <span className="constant">HIGH</span>); <span className="comment">// Tænd LED lys.</span>
            {'\n'}    
            <span className="function">delay</span>(<span className="literal">1000</span>); <span className="comment">// Vent 1 sekund.</span>
            {'\n'}    
            <span className="function">digitalWrite</span>(<span className="variable">ledPin</span>, <span className="constant">LOW</span>); <span className="comment">// Sluk LED lys.</span>
            {'\n'}    
            <span className="function">delay</span>(<span className="literal">1000</span>); <span className="comment">// Vent 1 sekund.</span>
            {'\n}'}
          </code>
        </pre>
        <button className="copy-button" onClick={() => copyCode(`const int ledPin = 7;

void setup() {
    pinMode(ledPin, OUTPUT); // Sæt LED pin som output
}

void loop() {
    digitalWrite(ledPin, HIGH); // Tænd LED lys.
    delay(1000); // Vent 1 sekund.
    digitalWrite(ledPin, LOW); // Sluk LED lys.
    delay(1000); // Vent 1 sekund.
}`)}>
          Kopier kode
        </button>
      </div>

      <br/>
    </>
  );
};

export default Eksempel1;