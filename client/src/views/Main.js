import React, { useState } from "react";
import axios from 'axios'; 
import { navigate, Router, Link } from "@reach/router";
// import DisplayAll from '../components/DisplayAll';
// import PetForm from '../components/PetForm';

const Main = (props) => {

    const [petList, setPetList] = useState([])
    return(
        <div>
            <header>
                <h1>Pet Shelter</h1>
                <Link to={"/new"}>Add an a pet to the shelter</Link>
            </header>
            <h2> These pets are looking for a good home</h2>
            {/* <PetForm 
                petList={petList} 
                setPetList={setPetList}/>  */}
                
            {/* <DisplayAll 
                petList={petList} 
                setPetList={setPetList}/> */}
        </div>
    )
};


export default Main