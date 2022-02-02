import './App.css';
import {useState} from 'react';
import {Router} from "@reach/router";
import DisplayAll from './components/DisplayAll';
import PetForm from "./components/PetForm"
// import Error from './components/Error';
import DisplayOne from './components/DisplayOne';
import UpdatePetInfo from './components/UpdatePetInfo';
// import Main from "./views/Main";


function App() {
  const [onePet, setOnePet] = useState({});

  return (
    <div className="App">
      <Router>
        <DisplayAll path="/" />
        <PetForm path="/new"/>
        {/* <Error path="/error" /> */}
        <UpdatePetInfo 
          onePet={onePet}
          path="/edit/:id"/>
  
        <DisplayOne 
          onePet={onePet}
          setOnePet={setOnePet}
          path="/pets/:id"/>
      </Router>
    </div>
  );
}

export default App;
