import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function App() {
  const [years, setYears] = useState(0);
  const [bday, setBday] = useState("");
  const [bools, setBools] = useState([false, false]);
  
  const handleChange = (event) => {
    setBools([true, false]);
    setBday(event.target.value);
  }
  const handleClick = () => {
    if (bools[0]) {
      var curr = Date.now();
      if (bday !== "") {
        var bdayDate = new Date(bday);
        var diff = curr - bdayDate;
        var diffDate = new Date(diff);
        setYears(diffDate.getUTCFullYear() - 1970);
        setBools([true, true]);
      }
      else {
        setBools([true, false]);
      }
    }
  }
  const yearsElem = () => {
    if (bools[1])
      return <h4 className="fw-bold">Your are {years} years old</h4>
  }
  return (
    <div className="App">
      <h1 className="fw-bold">Age Calculator</h1>
      <div className="fw-bold my-3">Enter your date of birth</div>
      <input onChange={handleChange} className="form-control w-25 mx-auto" type="date"/>
      <button onClick={handleClick} className="btn btn-primary my-2 py-2 px-3" style={{fontSize: 15}}>Calculate Age</button>
      {yearsElem()}
    </div>
  );
}

export default App;