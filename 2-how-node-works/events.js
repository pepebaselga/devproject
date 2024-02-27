const EventEmitter = require("events");
const http = require("http");

class Sales extends EventEmitter {
  constructor() {
    super();
  }
}
const myEmitter = new Sales();

myEmitter.on("newSale", () => {
  console.log("Ther was a new sale!");
});
myEmitter.on("newSale", () => {
  console.log("Customer Name: Pepe");
});
myEmitter.on("newSale", (stock) => {
  console.log(`There are now ${stock} items left in stock`);
});
myEmitter.emit("newSale", 9);

///////////////////////////////////////////

const server = http.createServer();

server.on("request", (req, res) => {
  console.log("request recieved");
  console.log(req.url);
  res.end("request-recieved");
});

server.on("request", (req, res) => {
  console.log("Another Request 🇪🇸");
});

server.on("close", () => {
  console.log("Server-Closed");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("waiting for request...");
});
