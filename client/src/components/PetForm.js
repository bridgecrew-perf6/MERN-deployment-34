import React, {useState} from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import Header from "./Header"

const PetForm = (props) => {
    
    const [name, setName] = useState("")
    const [type, setType] = useState("")
    const [description, setDescription] = useState("")
    const [errors, setErrors] = useState([]);
    const [skillOne, setSkillOne] = useState("")
    const [skillTwo, setSkillTwo] = useState("")
    const [skillThree, setSkillThree] = useState("")

    // const petNames = petList.map((pet) => pet.name.toUpperCase())

    const submitHandler = (e) => {
        e.preventDefault();

        axios.post("http://localhost:8000/api/pets", {
            name,
            type,
            description,
            skillOne,
            skillTwo,
            skillThree,
        })
            .then((res) => {
                // setPetList([...petList, res.data])
                setName("")
                setType("")
                setDescription("")
                setSkillOne("")
                setSkillTwo("")
                setSkillThree("")
                navigate("/")
            })
            .catch((err) => {
                console.log(err)
                const errorMessage = err.response.data.errors
                const errorList = []
                for (const key of Object.keys(errorMessage)){
                    errorList.push(errorMessage[key].message)
                }
                setErrors(errorList);
                }
            )
    } 

    return(
        <div>
            <Header
                title={"Pet Shelter"}
                link={"Back to home"}
                linkPath={"/"}
                subtitle={"Know a pet needing a home?"}
            />
            <form onSubmit={submitHandler}>
                
                    { errors.map((err, index) => <p key={index}> { err } </p>) }
                <div className="form-fields">
                    <label>Name</label>
                    <input 
                        onChange={ (e) =>setName(e.target.value) }
                        value={ name }
                        type="text" 
                    />

                </div>
                {
                        name.length < 3 && name.length !== 0 ? 
                            <p> Pet name must be at least 3 characters </p> 
                            : null
                }
                {/* {
                        petNames.includes(name.toUpperCase()) && 
                        <p> Pet name is already in the database</p>
                } */}
                <div className="form-fields">
                    <label>Type</label>
                    <input 
                        onChange={ (e) =>setType(e.target.value) }
                        value={ type }
                        type="text" 
                    />
                    {
                        type.length < 3 && type.length !== 0 ? 
                            <p> Pet type must be at least 3 characters </p> 
                            : null
                    }
                </div>

                <div className="form-fields">
                    <label>Description</label>
                    <input 
                        onChange={ (e) => setDescription(e.target.value) }
                        value={ description }
                        type="text" 
                    />
                    {
                        description.length < 3 && description.length !== 0 ? 
                            <p> Pet description must be at least 3 characters </p> 
                            : null
                    }
                </div>

                <div className="form-fields">
                    <label>Skill One</label>
                    <input 
                        onChange={ (e) => setSkillOne(e.target.value) }
                        value={ skillOne }
                        type="text" 
                    />
                </div>

                <div className="form-fields">
                    <label>Skill Two</label>
                    <input 
                        onChange={ (e) => setSkillTwo(e.target.value) }
                        value={ skillTwo }
                        type="text" 
                    />
                </div>

                <div className="form-fields">
                    <label>Skill Three</label>
                    <input 
                        onChange={ (e) => setSkillThree(e.target.value) }
                        value={ skillThree }
                        type="text" 
                    />
                </div>

                <input className="submitButton" type="submit" value="Add Pet to Inventory"/>
            </form>
        </div>
    )
}

export default PetForm