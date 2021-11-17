//will contain all the information that will run on our server 
console.log("up and running")

let express = require("express") //loaded express

let app= express() //activated express

//port thet we will use to 
let port = 3000

let server = app.listen(port)

console.log("Server is running on http://localhost:" + port)


app.use(express.static("public")) //all the file in the folder won't change over time 
