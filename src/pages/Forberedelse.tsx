import 'bs-stepper/dist/css/bs-stepper.min.css';
import './Forberedelse.css';
import Form from 'react-bootstrap/esm/Form';
import { InputGroup, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Forberedelse() {
  
    return (
      <>
      <div className="container">
            <div className="row">
                <div className="col-9">
                    <br></br>
                    <h4>Velkommen til forberedelse!</h4>
                    <p>Her går vi igennem forberedelsen, så vi er klar og parat når vi mødes.</p>

                    <div id="stepper1" className="bs-stepper">
                        <div className="bs-stepper-header" role="tablist">
                            <div className="step active" data-target="#test-nl-1">
                                    <span className="bs-stepper-circle">1</span>
                                    <span className="bs-stepper-label">Trin 1</span>
                            </div>
                            <div className="bs-stepper-line"></div>
                        </div>
                        <br/>
                        <div className="bs-stepper-content">
                            <p>Gå ind på <a
                                href="https://www.arduino.cc/en/software">https://www.arduino.cc/en/software</a></p>
                            <figure className="figure">
                            <img src="forberedelse/trin1.PNG" className="figure-img img-fluid rounded"
                                     alt="Trin 1"/>
                            </figure>

                            <br/>
                        </div>
                    </div>

                    <div id="stepper2" className="bs-stepper">
                        <div className="bs-stepper-header" role="tablist">
                            <div className="step active" data-target="#test-nl-1">
                                    <span className="bs-stepper-circle">2</span>
                                    <span className="bs-stepper-label">Trin 2</span>
                            </div>
                            <div className="bs-stepper-line"></div>
                        </div>
                        <br/>
                        <div className="bs-stepper-content">
                            <p>Tryk på <strong>Windows 10 Win 10 and newer, 64 bits</strong> som vist på billedet
                                nedenfor. </p>
                            <figure className="figure">
                                <img src="forberedelse/trin2.PNG" className="figure-img img-fluid rounded"
                                     alt="Trin 2"/>
                            </figure>

                            <br/>
                        </div>
                    </div>

                    <div id="stepper3" className="bs-stepper">
                        <div className="bs-stepper-header" role="tablist">
                            <div className="step active" data-target="#test-nl-1">
                                    <span className="bs-stepper-circle">3</span>
                                    <span className="bs-stepper-label">Trin 3</span>
                            </div>
                            <div className="bs-stepper-line"></div>
                        </div>
                        <br/>
                        <div className="bs-stepper-content">
                            <p>Tryk på <strong>JUST DOWNLOAD</strong> som vist på billederne nedenfor. </p>
                            <figure className="figure">
                                <img src="forberedelse/trin3.1.PNG" className="figure-img img-fluid rounded"
                                     alt="Trin 3"/>
                            </figure>
                            <p>Du kommer til næste side, hvor du igen skal trykke på <strong>JUST
                                DOWNLOAD</strong> endnu en gang som
                                vist på billedet nedenfor.</p>
                            <figure className="figure">
                                <img src="forberedelse/trin3.2.PNG" className="figure-img img-fluid rounded"
                                     alt="Trin 4"/>
                            </figure>
                            <br/>
                        </div>
                    </div>

                    <div id="stepper4" className="bs-stepper">
                        <div className="bs-stepper-header" role="tablist">
                            <div className="step active" data-target="#test-nl-1">
                                    <span className="bs-stepper-circle">4</span>
                                    <span className="bs-stepper-label">Trin 4</span>
                            </div>
                            <div className="bs-stepper-line"></div>
                        </div>
                        <br/>
                        <div className="bs-stepper-content">
                            <p>Hold <strong>Windows</strong> + <strong>E</strong> tasterne nede samtidigt, som
                                åbner <strong>Windows stifinder</strong> som vist på billedet nedenfor. </p>
                            <figure className="figure">
                                <img src="forberedelse/trin4.PNG" className="figure-img img-fluid rounded"
                                     alt="Trin 4"/>
                            </figure>
                            <br/>
                        </div>
                    </div>

                    <div id="stepper5" className="bs-stepper">
                        <div className="bs-stepper-header" role="tablist">
                            <div className="step active" data-target="#test-nl-1">
                                    <span className="bs-stepper-circle">5</span>
                                    <span className="bs-stepper-label">Trin 5</span>
                            </div>
                            <div className="bs-stepper-line"></div>
                        </div>
                        <br/>
                        <div className="bs-stepper-content">
                            <p>Tryk på <strong>arduino-ide_2.3.4_Windows_64bit.exe</strong> filen en gang og derefter
                                tryk på <strong>Enter</strong> tasten. </p>
                            <p>Dette åbner installations programmet for Arduino IDE, som kommer til at se ud som
                                billedet nedenfor.</p>
                            <figure className="figure">
                                <img src="forberedelse/trin5.PNG" className="figure-img img-fluid rounded"
                                     alt="Trin 5"/>
                            </figure>
                            <br/>
                        </div>
                    </div>
                    <div id="stepper6" className="bs-stepper">
                        <div className="bs-stepper-header" role="tablist">
                            <div className="step active" data-target="#test-nl-1">
                                    <span className="bs-stepper-circle">6</span>
                                    <span className="bs-stepper-label">Trin 6</span>
                            </div>
                            <div className="bs-stepper-line"></div>
                        </div>
                        <br/>
                        <div className="bs-stepper-content">
                            <p>Tryk på <strong>I Agree</strong> som vist på billedet nedenfor. </p>
                            <p>Dette åbner installations programmet for Arduino IDE, som kommer til at se ud som
                                billedet nedenfor.</p>
                            <figure className="figure">
                                <img src="forberedelse/trin6.png" className="figure-img img-fluid rounded"
                                     alt="Trin 6"/>
                            </figure>
                            <br/>
                        </div>
                    </div>

                    <div id="stepper7" className="bs-stepper">
                        <div className="bs-stepper-header" role="tablist">
                            <div className="step active" data-target="#test-nl-1">
                                    <span className="bs-stepper-circle">7</span>
                                    <span className="bs-stepper-label">Trin 7</span>
                            </div>
                            <div className="bs-stepper-line"></div>
                        </div>
                        <br/>
                        <div className="bs-stepper-content">
                            <p>Efter at acceptere brugsvilkårene, skal der vælges om programmet skal installeres på
                                alle brugere eller den Windows-bruger som er logget på nu.</p>
                            <p>Jeg anbefaler at installere det på den nuværende bruger ved:</p>
                            <ol>
                                <li>
                                    <p>Trykke på <strong>Only for me ([Dit brugernavn])</strong>.</p>
                                </li>
                                <li>
                                    <p>Trykke på <strong>Next</strong>.</p>
                                </li>
                                    <p>(Hvis du bliver spurgt af Windows om at acceptere som adminstrator, så klik på <strong>Accepter</strong>.)</p>
                            </ol>
                            <p>Billedet nedenfor viser rækkefølgen du skal følge.</p>
                            <figure className="figure">
                                <img src="forberedelse/trin7.2.png" className="figure-img img-fluid rounded"
                                     alt="Trin 7"/>
                            </figure>
                            <br/>
                        </div>
                    </div>

                    <div id="stepper8" className="bs-stepper">
                        <div className="bs-stepper-header" role="tablist">
                            <div className="step active" data-target="#test-nl-1">
                                <span className="bs-stepper-circle">8</span>
                                <span className="bs-stepper-label">Trin 8</span>
                            </div>
                            <div className="bs-stepper-line"></div>
                        </div>
                        <br/>
                        <div className="bs-stepper-content">
                            <p>Efter at vælge hvilke brugere der skal have det installeret, så skal der vælges hvor programmet skal installeres.</p>
                            <p>Jeg anbefaler ikke at røre det og bare installere det hvor Arduino anbefaler det:</p>
                            <ol>
                                <li>
                                    <p>Klik på <strong>Install</strong> som vist på billedet nedenfor.</p>
                                </li>
                            </ol>
                            <figure className="figure">
                                <img src="forberedelse/trin8.png" className="figure-img img-fluid rounded"
                                     alt="Trin 7"/>
                            </figure>
                            <br/>
                        </div>
                    </div>

                    <div id="stepper9" className="bs-stepper">
                        <div className="bs-stepper-header" role="tablist">
                            <div className="step active" data-target="#test-nl-1">
                                <span className="bs-stepper-circle">9</span>
                                <span className="bs-stepper-label">Trin 9</span>
                            </div>
                            <div className="bs-stepper-line"></div>
                        </div>
                        <br/>
                        <div className="bs-stepper-content">
                            <p>Nu burde programmet gerne begynde at installere og vil vise billedet vist nedenfor.</p>
                            <figure className="figure">
                                <img src="forberedelse/trin9.png" className="figure-img img-fluid rounded"
                                     alt="Trin 9"/>
                            </figure>
                            <br/>
                            <ol>
                                <li>
                                    <p>Klik på <strong>Run Arduino IDE</strong> som vist på billedet nedenfor.</p>
                                </li>
                            </ol>
                            <p>(Hvis du bliver spurgt af Windows om at tillade programmer at bruge netværket eller installere drivers når du starter Arduino IDE, så klik på <strong>Tillad</strong> og/eller <strong>Installer</strong>.)</p>
                            <figure className="figure">
                                <img src="forberedelse/trin9.2.png" className="figure-img img-fluid rounded"
                                     alt="Trin 9"/>
                            </figure>
                        </div>
                    </div>

                    <div id="stepper10" className="bs-stepper">
                        <div className="bs-stepper-header" role="tablist">
                            <div className="step active" data-target="#test-nl-1">
                                <span className="bs-stepper-circle">10</span>
                                <span className="bs-stepper-label">Trin 10</span>
                            </div>
                            <div className="bs-stepper-line"></div> 
                        </div>
                        <br/>
                        <p>Nu burde du gerne kunne se Arduino IDE klienten som vist på billedet nedenfor.</p>
                        <figure className="figure">
                            <img src="forberedelse/trin10.1.png" className="figure-img img-fluid rounded"
                                     alt="Trin 10.1"/>
                        </figure>

                        <br/>

                        <ol>
                            <li>
                                <p>Klik på <strong>File / Fil</strong> i øverstre venstre hjørne af programmet.</p>
                            </li>
                            <li>
                                <p>Klik på <strong>Preferences / Preferencer</strong> i dropdown menuen.</p>
                            </li>
                            <figure className="figure">
                            <img src="forberedelse/trin10.2.png" className="figure-img img-fluid rounded"
                                     alt="Trin 10.2"/>
                        </figure>
                        </ol>

                        <div className="bs-stepper-content">
                            
                        </div>
                    </div>

                    <div id="stepper11" className="bs-stepper">
                        <div className="bs-stepper-header" role="tablist">
                            <div className="step active" data-target="#test-nl-1">
                                <span className="bs-stepper-circle">11</span>
                                <span className="bs-stepper-label">Trin 11</span>
                            </div>
                            <div className="bs-stepper-line"></div> 
                        </div>
                        <br/>
                        <ol>
                            <li>
                                <p>Klik på tekstfeltet vinduet som åbnede sig.</p>
                            </li>
                            <li>
                                <p>Indsæt teksten:</p>
                                <InputGroup className="mb-3">
                                    <Form.Control
                                    value="https://mcudude.github.io/MiniCore/package_MCUdude_MiniCore_index.json"
                                    readOnly
                                    aria-describedby="basic-addon2"
                                    />
                                    <Button variant="outline-primary" id="button-addon2" onClick={() => {navigator.clipboard.writeText("https://mcudude.github.io/MiniCore/package_MCUdude_MiniCore_index.json")}}>
                                    Kopier tekst
                                    </Button>
                                </InputGroup>
                            </li>
                            <li>
                                <p>Klik på <strong>OK</strong> som billedet nedenfor.</p>
                            </li>
                            <figure className="figure">
                            <img src="forberedelse/trin11.png" className="figure-img img-fluid rounded"
                                     alt="Trin 11"/>
                        </figure>
                        </ol>

                        <div className="bs-stepper-content">
                            
                        </div>
                    </div>

                    <div id="stepper12" className="bs-stepper">
                        <div className="bs-stepper-header" role="tablist">
                            <div className="step active" data-target="#test-nl-1">
                                <span className="bs-stepper-circle">12</span>
                                <span className="bs-stepper-label">Trin 12</span>
                            </div>
                            <div className="bs-stepper-line"></div> 
                        </div>
                        <br/>
                        <p>Nu skal vi installere en Board Manager, som gør det muligt at bruge USB-C med vores Arduino når den skal programmeres.</p>
                        <ol>
                            <li>
                                <p>Klik på objektet markeret i billedet nedenfor for at åbne <strong>BOARDS MANAGER</strong> vinduet.</p>
                            </li>
                            <figure className="figure">
                                <img src="forberedelse/trin12.1.png" className="figure-img img-fluid rounded" alt="Trin 12.1"/>
                            </figure>

                            <li>
                                <p>Klik på tekstfeltet markeret i billedet nedenfor.</p>
                            </li>

                            <li>
                                <p>Indsæt teksten:</p>
                                <InputGroup className="mb-3">
                                    <Form.Control
                                    value="MiniCore"
                                    readOnly
                                    aria-describedby="basic-addon2"
                                    />
                                    <Button variant="outline-primary" id="button-addon2" onClick={() => {navigator.clipboard.writeText("MiniCore")}}>
                                    Kopier tekst
                                    </Button>
                                </InputGroup>
                            </li>

                            <li>
                                <p>Tryk på <strong>ENTER</strong> tasten.</p>
                            </li>

                            <li>
                                <p>Klik på <strong>INSTALL</strong> som vist i billedet nedenfor.</p>
                            </li>

                            <figure className="figure">
                                <img src="forberedelse/trin12.2.png" className="figure-img img-fluid rounded" alt="Trin 12.2"/>
                            </figure>
                        </ol>

                        <div className="bs-stepper-content">
                            
                        </div>
                    </div>

                    <div id="stepper13" className="bs-stepper">
                        <div className="bs-stepper-header" role="tablist">
                            <div className="step active" data-target="#test-nl-1">
                                <span className="bs-stepper-circle">13</span>
                                <span className="bs-stepper-label">Trin 13</span>
                            </div>
                            <div className="bs-stepper-line"></div> 
                        </div>
                        <br/>
                        
                        <div style={{textAlign: "center"}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" fill="lightgreen" className="bi bi-check" viewBox="0 0 16 16">
                                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/>
                            </svg>


                            <h1>Godt gået, nu er du færdig!</h1>

                            <Link to="/">Gå tilbage til forsiden.</Link>
                        </div>

                        <div className="bs-stepper-content">
                            
                        </div>
                    </div>

                </div>

                

                <div className="col-3">

                </div>
            </div>
        </div>
      </>
    )
  }
  
  export default Forberedelse
  