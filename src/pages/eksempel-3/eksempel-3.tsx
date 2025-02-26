import React from 'react';
import './eksempel-3.css'; // Ensure your CSS file is correctly imported

const Eksempel3: React.FC = () => {
  // Function to copy code to clipboard
  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code).then(() => {
      alert('Koden er kopieret til udklipsholderen!'); // Alert in Danish
    }).catch(err => {
      console.error('Fejl ved kopiering af kode: ', err); // Error in Danish
    });
  };

  return (
    <>
      <h4>Eksempel 3 - LED og Knap</h4>
      <p>I det her eksempel bruger vi en knap til at tænde for et LED lys.</p>
      <p>Nedenfor kan man se hvordan vores komponenter skal kobles sammen.</p>

      <img
        src="eksempel3/Fritzing1.png"
        className="figure-img img-fluid rounded"
        alt="Kredsløbsdiagram"
      />

      <h6>Kode eksempel 1</h6>
      <p>I setup() sætter vi pin 7 til INPUT for at læse fra knappen og pin 8 til OUTPUT for at styre LED'en.</p>
      <p>I loop() tænder vi LED'en, når knappen trykkes ned, og slukker den, når knappen slippes.</p>

      {/* Code display section for Example 1 */}
      <div className="code-container">
        <pre>
          <code>
            <span className="keyword">void</span> <span className="function">setup</span>() {'{'}
            {'\n'}    <span className="function">pinMode</span>(<span className="literal">7</span>, <span className="constant">INPUT</span>); <span className="comment">// Sæt pin 7 som input</span>
            {'\n'}    <span className="function">pinMode</span>(<span className="literal">8</span>, <span className="constant">OUTPUT</span>); <span className="comment">// Sæt pin 8 som output</span>
            {'\n}'}
            {'\n'}
            {'\n'}<span className="keyword">void</span> <span className="function">loop</span>() {'{'}
            {'\n'}    <span className="keyword">if</span> (<span className="function">digitalRead</span>(<span className="literal">7</span>) == <span className="constant">HIGH</span>) {'{'} <span className="comment">// Læs knappens tilstand</span>
            {'\n'}        <span className="function">digitalWrite</span>(<span className="literal">8</span>, <span className="constant">HIGH</span>); <span className="comment">// Tænd LED'en</span>
            {'\n'}    {'}'} <span className="keyword">else</span> {'{'}
            {'\n'}        <span className="function">digitalWrite</span>(<span className="literal">8</span>, <span className="constant">LOW</span>); <span className="comment">// Sluk LED'en</span>
            {'\n'}    {'}'}
            {'\n'}{'}'}
          </code>
        </pre>
        <button className="copy-button" onClick={() => copyCode(`void setup() {
    pinMode(7, INPUT); // Sæt pin 7 som input
    pinMode(8, OUTPUT); // Sæt pin 8 som output
}

void loop() {
    if (digitalRead(7) == HIGH) { // Læs knappens tilstand
        digitalWrite(8, HIGH); // Tænd LED'en
    } else {
        digitalWrite(8, LOW); // Sluk LED'en
    }
}`)}>
          Kopier kode
        </button>
      </div>

      <br/>

      <h6>Kode eksempel 2</h6>
      <p>I stedet for at bruge direkte pin-numre, bruger vi variabler til at holde styr på pin'ene.</p>

      {/* Code display section for Example 2 */}
      <div className="code-container">
        <pre>
          <code>
            <span className="keyword">const</span> <span className="type">int</span> <span className="variable">buttonPin</span> = <span className="literal">7</span>; <span className="comment">// Pin for knappen</span>
            {'\n'}<span className="keyword">const</span> <span className="type">int</span> <span className="variable">ledPin</span> = <span className="literal">8</span>; <span className="comment">// Pin for LED'en</span>
            {'\n'}
            {'\n'}<span className="keyword">void</span> <span className="function">setup</span>() {'{'}
            {'\n'}    <span className="function">pinMode</span>(<span className="variable">buttonPin</span>, <span className="constant">INPUT</span>); <span className="comment">// Sæt buttonPin som input</span>
            {'\n'}    <span className="function">pinMode</span>(<span className="variable">ledPin</span>, <span className="constant">OUTPUT</span>); <span className="comment">// Sæt ledPin som output</span>
            {'\n'}{'}'}
            {'\n'}
            {'\n'}<span className="keyword">void</span> <span className="function">loop</span>() {'{'}
            {'\n'}    <span className="keyword">if</span> (<span className="function">digitalRead</span>(<span className="variable">buttonPin</span>) == <span className="constant">HIGH</span>) {'{'} <span className="comment">// Læs knappens tilstand</span>
            {'\n'}        <span className="function">digitalWrite</span>(<span className="variable">ledPin</span>, <span className="constant">HIGH</span>); <span className="comment">// Tænd LED'en</span>
            {'\n'}    {'}'} <span className="keyword">else</span> {'{'}
            {'\n'}        <span className="function">digitalWrite</span>(<span className="variable">ledPin</span>, <span className="constant">LOW</span>); <span className="comment">// Sluk LED'en</span>
            {'\n'}    {'}'}
            {'\n'}{'}'}
          </code>
        </pre>
        <button className="copy-button" onClick={() => copyCode(`const int buttonPin = 7; // Pin for knappen
const int ledPin = 8; // Pin for LED'en

void setup() {
    pinMode(buttonPin, INPUT); // Sæt buttonPin som input
    pinMode(ledPin, OUTPUT); // Sæt ledPin som output
}

void loop() {
    if (digitalRead(buttonPin) == HIGH) { // Læs knappens tilstand
        digitalWrite(ledPin, HIGH); // Tænd LED'en
    } else {
        digitalWrite(ledPin, LOW); // Sluk LED'en
    }
}`)}>
          Kopier kode
        </button>
      </div>

      <br/>
    </>
  );
};

export default Eksempel3;