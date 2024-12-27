import 'bs-stepper/dist/css/bs-stepper.min.css';
import './Forberedelse.css';

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
                                <button type="button" className="step-trigger" role="tab" id="stepper2trigger1"
                                        aria-controls="test-nl-1" aria-selected="true">
                                    <span className="bs-stepper-circle">1</span>
                                    <span className="bs-stepper-label">Trin 1</span>
                                </button>
                            </div>
                            <div className="bs-stepper-line"></div>
                        </div>
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
                                <button type="button" className="step-trigger" role="tab" id="stepper2trigger1"
                                        aria-controls="test-nl-1" aria-selected="true">
                                    <span className="bs-stepper-circle">2</span>
                                    <span className="bs-stepper-label">Trin 2</span>
                                </button>
                            </div>
                            <div className="bs-stepper-line"></div>
                        </div>
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
                                <button type="button" className="step-trigger" role="tab" id="stepper2trigger1"
                                        aria-controls="test-nl-1" aria-selected="true">
                                    <span className="bs-stepper-circle">3</span>
                                    <span className="bs-stepper-label">Trin 3</span>
                                </button>
                            </div>
                            <div className="bs-stepper-line"></div>
                        </div>
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
                                <button type="button" className="step-trigger" role="tab" id="stepper2trigger1"
                                        aria-controls="test-nl-1" aria-selected="true">
                                    <span className="bs-stepper-circle">4</span>
                                    <span className="bs-stepper-label">Trin 4</span>
                                </button>
                            </div>
                            <div className="bs-stepper-line"></div>
                        </div>
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
                                <button type="button" className="step-trigger" role="tab" id="stepper2trigger1"
                                        aria-controls="test-nl-1" aria-selected="true">
                                    <span className="bs-stepper-circle">5</span>
                                    <span className="bs-stepper-label">Trin 5</span>
                                </button>
                            </div>
                            <div className="bs-stepper-line"></div>
                        </div>
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
                                <button type="button" className="step-trigger" role="tab" id="stepper2trigger1"
                                        aria-controls="test-nl-1" aria-selected="true">
                                    <span className="bs-stepper-circle">6</span>
                                    <span className="bs-stepper-label">Trin 6</span>
                                </button>
                            </div>
                            <div className="bs-stepper-line"></div>
                        </div>
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
                                <button type="button" className="step-trigger" role="tab" id="stepper2trigger1"
                                        aria-controls="test-nl-1" aria-selected="true">
                                    <span className="bs-stepper-circle">7</span>
                                    <span className="bs-stepper-label">Trin 7</span>
                                </button>
                            </div>
                            <div className="bs-stepper-line"></div>
                        </div>
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

                            </ol>
                            <p>Billedet nedenfor viser rækkefølgen du skal følge.</p>
                            <figure className="figure">
                                <img src="forberedelse/trin7.2.png" className="figure-img img-fluid rounded"
                                     alt="Trin 7"/>
                            </figure>
                            <br/>
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
  