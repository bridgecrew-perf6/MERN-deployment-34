import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, navigate } from "@reach/router";
import Header from "./Header";

const DisplayAll = (props) =>{
    
    const [petList, setPetList] = useState([])
    
    // https://stackoverflow.com/questions/15593850/sort-array-based-on-object-attribute-javascript
    //This sorts the pets by "type" of pet and places in alphabetical order
    const sortedPets = petList.sort(function(a,b) 
        {return (a.type > b.type) ? 1 
            : ((b.type > a.type) ? -1 
                : 0)} ); 

    useEffect(() => {
        axios.get("http://localhost:8000/api/pets")
            .then((res) => {
                console.log(res.data);
                setPetList(res.data);
            })
            .catch((err) => console.log("Display all, useEffect: " + err))
    }, [])

    const deletePetFilter = (idFromOnClick) => {
        axios.delete(`http://localhost:8000/api/pets/${idFromOnClick}`)
            .then((res) => {
                console.log(res.data)
                const newPetList = petList.filter((pet, index) => pet._id !== idFromOnClick)
                setPetList(newPetList);
            })
            .catch((err) => console.log(err))
    }

    return(
        <div style={{margin: '1em'}}>

            <Header
                title={"Pet Shelter"}
                link={"add a new pet to the shelter"}
                linkPath={"/new"}
                subtitle={"These pets are looking for a good home"}
            />

            <table style={{border:"1px solid grey"}}>
                <thead style={{backgroundColor:"lightGrey", color:"white"}}>
                    <tr>
                        <th>Name </th>
                        <th>Type </th>
                        <th>Actions </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        sortedPets?

                        sortedPets.map((pet, index) => (
                            <tr key={index}>
                                <td> <Link to={`/pets/${pet._id}`}>{pet.name}</Link></td>
                                <td>{pet.type}</td>
                                <td>
                                    <Link to={`/pets/${pet._id}`}>Details</Link>
                                    <Link to={`/edit/${pet._id}`}>Edit</Link>
                                </td>

                            </tr>
                        ))
                        : null
                    }
                </tbody>
            </table>

        </div>
    )
}

export default DisplayAll