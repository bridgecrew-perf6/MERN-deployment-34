const PetController = require("../controllers/pet.controllers")

module.exports = (app) => {
    app.post("/api/pets", PetController.createPet) //Request at this end point, perform createPet function
    app.get("/api/pets", PetController.getAllPets)
    app.get("/api/pets/:id", PetController.getOnePet)
    app.delete("/api/pets/:id", PetController.deleteOnePet)
    app.put("/api/pets/:id", PetController.updateOnePet)
}








/* 

- A route is a section of Express code that 
associates a HTTP verb (get, post, delete)
- "app" is an object with many functions.
- app.post( "/", ? ) takes two arguments, (1) the path, and (2) callback
- "route" paths are endpoints at which requests can be made

*/