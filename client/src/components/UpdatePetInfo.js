import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { navigate } from "@reach/router";
import Header from './Header';
const UpdatePetInfo = (props) => {
    
    const {id, onePet} = props; 
    const [name, setName] = useState("")
    const [type, setType] = useState("")
    const [description, setDescription] = useState("")
    const [skillOne, setSkillOne] = useState("")
    const [skillTwo, setSkillTwo] = useState("")
    const [skillThree, setSkillThree] = useState("")

    //Use Effect Hook
    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${id}`) //makes a call to the API with the pet ID
            .then((res) => {
                setName(res.data.name) //retrieves name, type, and description; places them in the input fields
                setType(res.data.type)
                setDescription(res.data.description)
                setSkillOne(res.data.skillOne);
                setSkillTwo(res.data.skillTwo);
                setSkillThree(res.data.skillThree);
            })
            .catch((err) => console.log("Use Effect UpdatePetInfo.js: " + err))
    }, [id])

    //Submit Handler
    const submitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/pets/${id}`, { 
            name,
            type,
            description,
            skillOne,
            skillTwo,
            skillThree,
        })
        .then((res) => {
            navigate("/")
        })
        .catch((err) => console.log(err))
    }

    return(
        <div>
            <Header
                title={"Pet Shelter"}
                link={"Back to home"}
                linkPath={"/"}
                subtitle={"Edit Pet"}
            />
            <form 
                style={{display: 'flex'}}
                onSubmit={submitHandler}>
                <div>
                <div className="form-fields">
                    <label>Name</label>
                    <input 
                        style={{border: '2px solid black'}}
                        onChange={ (e) =>{
                            console.log('hello')
                            setName(e.target.value)} }
                        value={ name }
                        type="text" 
                    />
                    {
                        name.length < 3 && name.length !== 0 ? 
                            <p> Pet name must be at least 3 characters </p> 
                            : null
                    }
                </div>
                <div className="form-fields">
                    <label>Type</label>
                    <input 
                        style={{border: '2px solid black'}}
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
                        style={{border: '2px solid black'}}
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
                </div>
                <div>
                <div className="form-fields">
                    <label>Skill One</label>
                    <input 
                        style={{border: '2px solid black'}}
                        onChange={ (e) => setSkillOne(e.target.value) }
                        value={ skillOne }
                        type="text" 
                    />
                </div>

                <div className="form-fields">
                    <label>Skill Two</label>
                    <input 
                        style={{border: '2px solid black'}}
                        onChange={ (e) => setSkillTwo(e.target.value) }
                        value={ skillTwo }
                        type="text" 
                    />
                </div>

                <div className="form-fields">
                    <label>Skill Three</label>
                    <input 
                        style={{border: '2px solid black'}}
                        onChange={ (e) => setSkillThree(e.target.value) }
                        value={ skillThree }
                        type="text" 
                    />
                </div>
                </div>
            </form>



            <input 
                onClick={(e)=>submitHandler(e)}
                className="submitButton" 
                type="submit" 
                value="Edit Pet Info"/>
            <button onClick={() => navigate("/")}>Home</button>
        </div>
    )
}

export default UpdatePetInfo;