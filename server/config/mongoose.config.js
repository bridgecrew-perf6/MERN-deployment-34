const mongoose = require("mongoose");

const dbName = "pets"

mongoose.connect(`mongodb://localhost/${dbName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(()=> console.log(`You're connected to database: ${dbName}`))
    .catch((err) => console.log(err))

