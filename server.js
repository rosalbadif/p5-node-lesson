//will contain all the information that will run on our server 
console.log("up and running")

let express = require("express") //loaded express
let app= express() //activated express

//port thet we will use to 
//let port = 3000
let port = process.env.PORT || 3000 //run it on the heroku port OR on 3000
let server = app.listen(port)

console.log("Server is running on http://localhost:" + port)

app.use(express.static("public")) //all the file in the folder won't change over time 



let serverSocket = require("socket.io")

//we have to tell socket what server we are using 
let io = serverSocket(server) //already called the server in the line 11
io.on("connection", newConnection) //when you see a new "CONNECTION" (standard name) run the newConnection function

function newConnection(newSocket) { //passes a data file containing all the information about the connection called newSocket
    console.log(newSocket.id) //gives back the id of every user accessing the server

    //to send the information from the client to the server
    newSocket.on("mouse", mouseMessage) 

    function mouseMessage(dataReceived){
        console.log(dataReceived)

        //to send back the information from the server to all the other clients
        newSocket.broadcast.emit("mouseBroadcast", dataReceived)
    }
}

