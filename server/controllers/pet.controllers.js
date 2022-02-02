const Pet = require("../models/pet.models");

module.exports = {

    createPet: (req, res) => {
        Pet.create(req.body)
            .then((newPet) => res.json(newPet))
            .catch((err) => {
                console.log(err)
                res.status(400).json(err)
            })
    },

    getAllPets: (req, res) => {
        Pet.find({})
            .then((allPets) => res.json(allPets))
            .catch((err) => {
                console.log(err)
                res.status(400).json(err)
            })
    },

    getOnePet: (req, res) => {
        Pet.findOne({_id: req.params.id}) //"_id" is from mongoDB, "id" is a parameter
            .then((onePet) => res.json(onePet))
            .catch((err) => {
                console.log(err)
            })
    },
    
    deleteOnePet: (req, res) => {
        Pet.deleteOne({_id: req.params.id})
            .then((deletedPet) => res.json(deletedPet))
            .catch((err) => {
                console.log(err)
                res.status(400).json(err)
            })
    },

    updateOnePet: (req, res) => {
        Pet.findByIdAndUpdate({_id: req.params.id}, 
            req.body, 
            {
                new: true,
                runValidators: true, //allows validators to run on put requests too 
            })
            .then((updatedPet) => res.json(updatedPet))
            .catch((err) => {
                console.log(err)
                res.status(400).json(err)
            })
    }
    
}



/*

- A controller function obtains data from the model, and 
displays the data to the user in the browser

- app.post( "/", ()=> ) takes two arguments, (1) the path, and (2) callback
- The callback is invoked if the the HTTP post if received. 
        The callback takes 3 arguments: req, res, next - 
        which are all objects containing data
*/