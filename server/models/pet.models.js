//name, type, description

const mongoose = require("mongoose");

const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Must have a pet name entered"],
        minLength: [3, "Pet name must be at least 3 characaters"]
    }, 
    type: {
        type: String,
        required: [true, "Must have a pet type entered"],
        minLength: [3, "Pet type must be at least 3 characaters"]
    }, 
    description: {
        type: String,
        required: [true, "Must have a pet description entered"],
        minLength: [3, "Pet description must be at least 3 characaters"]
    },
    skillOne: {
        type: String
    },
    skillTwo: {
        type: String
    },
    skillThree: {
        type: String
    },

}, {timestamps: true})

const Pet = mongoose.model("Pet", PetSchema)

module.exports = Pet; 