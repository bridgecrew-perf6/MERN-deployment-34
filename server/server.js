const express = require("express") // imports express
const cors = require("cors") // imports cors
const app = express(); // allows us to use express 


app.use(express.json()) //middleware
app.use(express.urlencoded(
    { extended: true }
)) //middleware

app.use(
    cors({origin: "http://localhost:3000"})
)

require("./config/mongoose.config")
require("./routes/pet.routes")(app)

app.listen(8000, ()=> {
    console.log("You're listening to port 8000")
})