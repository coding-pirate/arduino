import React from 'react';
import './eksempel-2.css'; // Ensure your CSS file is correctly imported

const Eksempel2: React.FC = () => {
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
      <h4>Eksempel 2 - Knap</h4>
      <p>I det her eksempel bruger vi en knap til at skrive til os når vi holder den nede.</p>
      <p>Nedenfor kan man se hvordan vores komponenter skal kobles sammen.</p>

      <img
        src="eksempel2/Fritzing1.png"
        className="figure-img img-fluid rounded"
        alt="Trin 1"
      />

      <h6>Kode eksempel 1</h6>
      <p>I setup() sætter vi pin 7 til INPUT for at læse fra knappen.</p>
      <p>I loop() læser vi knappens tilstand og skriver til Serial Monitor, hvis den er trykket ned.</p>

      {/* 1. Kode eksempel */}
      <div className="code-container">
        <pre>
          <code>
            <span className="keyword">void</span> <span className="function">setup</span>() {'{'}
            {'\n'}    <span className="function">pinMode</span>(<span className="literal">7</span>, <span className="constant">INPUT</span>); <span className="comment">// Sæt pin 7 som input</span>
            {'\n'}    <span className="function">Serial.begin</span>(<span className="literal">9600</span>); <span className="comment">// Start Serial Monitor</span>
            {'\n}'}
            {'\n'}
            <span className="keyword">void</span> <span className="function">loop</span>() {'{'}
            {'\n'}    <span className="keyword">if</span> (<span className="function">digitalRead</span>(<span className="literal">7</span>) == <span className="constant">HIGH</span>) {'{'} <span className="comment">// Læs knappens tilstand</span>
            {'\n'}        <span className="function">Serial.println</span>(<span className="string">"Knappen er trykket!"</span>); <span className="comment">// Skriv til Serial Monitor</span>
            {'\n'}    {'}'}
            {'\n'}    <span className="function">delay</span>(<span className="literal">100</span>); <span className="comment">// Vent 100 ms for at undgå bouncing</span>
            {'\n}'}
          </code>
        </pre>
        <button className="copy-button" onClick={() => copyCode(`void setup() {
    pinMode(7, INPUT); // Sæt pin 7 som input
    Serial.begin(9600); // Start Serial Monitor
}

void loop() {
    if (digitalRead(7) == HIGH) { // Læs knappens tilstand
        Serial.println("Knappen er trykket!"); // Skriv til Serial Monitor
    }
    delay(100); // Vent 100 ms for at undgå bouncing
}`)}>
          Kopier kode
        </button>
      </div>

      <br/>

      <h6>Kode eksempel 2</h6>
      <p>I stedet for at skrive 7, så laver vi en variabel som hedder buttonPin.</p>

      {/* 2. kode eksempel */}
      <div className="code-container">
        <pre>
          <code>
            <span className="keyword">const</span> <span className="type">int</span> <span className="variable">buttonPin</span> = <span className="literal">7</span>; <span className="comment">// Definer pin for knappen</span>
            {'\n'}
            {'\n'}<span className="keyword">void</span> <span className="function">setup</span>() {'{'}
            {'\n'}    <span className="function">pinMode</span>(<span className="variable">buttonPin</span>, <span className="constant">INPUT</span>); <span className="comment">// Sæt buttonPin som input</span>
            {'\n'}    <span className="function">Serial.begin</span>(<span className="literal">9600</span>); <span className="comment">// Start Serial Monitor</span>
            {'\n}'}
            {'\n'}
            <span className="keyword">void</span> <span className="function">loop</span>() {'{'}
            {'\n'}    <span className="keyword">if</span> (<span className="function">digitalRead</span>(<span className="variable">buttonPin</span>) == <span className="constant">HIGH</span>) {'{'} <span className="comment">// Læs knappens tilstand</span>
            {'\n'}        <span className="function">Serial.println</span>(<span className="string">"Knappen er trykket!"</span>); <span className="comment">// Skriv til Serial Monitor</span>
            {'\n'}    {'}'}
            {'\n'}    <span className="function">delay</span>(<span className="literal">100</span>); <span className="comment">// Vent 100 ms for at undgå bouncing</span>
            {'\n}'}
          </code>
        </pre>
        <button className="copy-button" onClick={() => copyCode(`const int buttonPin = 7; // Definer pin for knappen

void setup() {
    pinMode(buttonPin, INPUT); // Sæt buttonPin som input
    Serial.begin(9600); // Start Serial Monitor
}

void loop() {
    if (digitalRead(buttonPin) == HIGH) { // Læs knappens tilstand
        Serial.println("Knappen er trykket!"); // Skriv til Serial Monitor
    }
    delay(100); // Vent 100 ms for at undgå bouncing
}`)}>
          Kopier kode
        </button>
      </div>

      <br/>
    </>
  );
};

export default Eksempel2;