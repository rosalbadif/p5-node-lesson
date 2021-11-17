//activate the library
let clientSocket = io()

clientSocket.on("connect", newConnection)  //when a new connect arrives, run the function newConnection
clientSocket.on("mouseBroadcast", newBroadcast) //when we get the message "mouseBroadcast", execute the funct newBroadcast

function newConnection() {
  console.log(clientSocket.id) //print the unique id of the client provided from the connection
}

function newBroadcast(data) {
  console.log(data) //to send back the information from the server to all the other clients
  fill("orange")
  circle(data.x, data.y, 10) //to draw the position of the other clients
}

function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {
  
  fill("blue")
  circle(mouseX, mouseY, 10)

}

function mouseMoved(){
  //collect the information of the mouse position
  let message = {
    x:mouseX, //x position
    y:mouseY, //y position
  }

  //to send this information from the client to the server
  clientSocket.emit("mouse", message) //title of the information + message=>the variable i created
}
//so now we can send the informations between two tabs like they are two different clients (i can read the movement of one tab on the second tab and viceversa)