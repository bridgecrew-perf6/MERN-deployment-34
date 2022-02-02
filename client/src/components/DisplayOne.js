import { navigate } from '@reach/router';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Header from './Header';

const DisplayOne = (props) =>{

    const {id, onePet, setOnePet} = props;

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${id}`)
            .then((res) => {
                console.log(res.data)
                setOnePet(res.data)
            })
            .catch((err) => console.log("Display One Use Effect" + err))
    }, [id])

    const deleteHandler = () => {
        axios.delete(`http://localhost:8000/api/pets/${id}`)
            .then((res) => {
                navigate("/")
            })
            .catch((err) => console.log(err))
        console.log('hello')
    };

    return(
        <div style={{textAlign: 'left', padding: '1em'}}>
            <Header
                title={"Pet Shelter"}
                link={"Back to home"}
                linkPath={"/"}
                subtitle={`Details about: ${onePet.name}`}
            />
            <div style={{width: '100%', display: 'flex',justifyContent: 'flex-end'}}>
            <button 
                style={{marginRight: '1em', marginTop: '-5em', height: '4em', width: '15em', backgroundColor: '#CF2B27'}}
                onClick={() => deleteHandler()}>Adopt {onePet.name}</button>
            </div>
            <div style={{border: '5px solid black', padding: '2em'}}>
                <div style={{display: 'flex'}}>
                    <div className='petInfo'>Pet Type:</div>
                    <div className='petInfoData'>{onePet.type}</div>
                </div>

                <div style={{display: 'flex'}}>
                    <div className='petInfo'>Description:</div>
                    <div className='petInfoData'>{onePet.description}</div>
                </div>

                <div style={{display: 'flex'}}>
                    <div className='petInfo'>Skills:</div>
                    <div className='petInfoData'>
                        <div> {onePet.skillOne} </div>
                        <div> {onePet.skillTwo} </div>
                        <div> {onePet.skillThree} </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DisplayOne