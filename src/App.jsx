import { useState } from "react";
import Card from './Card'

function App() {
  const [myName, setMyName] = useState('');
  const [aboutMe, setAboutMe] = useState('');
  const [isFormValid, setIsFormValid] = useState(true);
  const [sumbitted, setSubmitted] = useState(false);

  function validateForm(e) {
    e.preventDefault();
    setIsFormValid(myName.trim().length >= 3 && aboutMe.trim().length >= 6);
    setSubmitted(true);
  }

  return (
    <div className="App">
      <h1>Cuéntame sobre ti</h1>
      <form>
        <input className={"myName"} id="myName" type="text" placeholder="Gabriel" value={myName} onChange={(e) => setMyName(e.target.value)} />
        <input className={"aboutMe"} id="aboutMe" type="text" placeholder="Soy dev, me gustan los gatos."value={aboutMe} onChange={(e) => setAboutMe(e.target.value)}/>
        <button onClick={validateForm}>Enviar</button>
      </form>
      {!isFormValid && <span className="error">Por favor chequea que la información sea correcta</span>}
      {isFormValid && sumbitted && <Card myName={myName} aboutMe={aboutMe} />}
    </div>
  );
}

export default App;
