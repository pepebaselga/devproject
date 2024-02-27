// TODO: read large file and send to client
const fs = require("fs");
const server = require("http").createServer();

server.on("request", (req, res) => {
  //solution1
  // fs.readFile("starter/test-file.txt", (err, data) => {
  //   if (err) console.log(err);
  //   res.end(data);
  // });
  // res.end("request-recieved!");
  //
  //
  //Solution2: Streams
  // const readable = fs.createReadStream("starter/testtt-file.txt");
  // readable.on("data", (chunk) => {
  //   res.write(chunk);
  // });
  // readable.on("end", () => {
  //   res.end();
  // });
  // readable.on("error", (err) => {
  //   console.log(err);
  //   res.statusCode = 500;
  //   res.end("File Not Found!");
  // });
  //
  //
  //Solution3: pipe operator
  const readable = fs.createReadStream("starter/test-file.txt");
  readable.pipe(res);
  //readableSource.pipe(WriteableDest)
});
server.listen(8000, "127.0.0.1", () => {
  console.log("waiting for request...");
});
