const fs = require('fs');
const http = require('http');
const url = require('url');
//Blocking, Syncharnous way
// const { text } = require('stream/consumers');
// const textin = fs.readFileSync('starter/txt/input.txt', 'utf-8');
// console.log(textin);

// const textOut = `This is what we know about the avocado: ${textin}.\nCreated on ${Date.now()}`;
// fs.writeFileSync('starter/txt/output.txt', textOut);

// console.log('File written!');

//Non-Blocking, Asynchronous way 
// fs.readFile('starter/txt/start.txt', 'utf-8', (err, data1) => {
//   if (err) return console.log("Error! 💥");
//   fs.readFile(`starter/txt/${data1}.txt`, 'utf-8', (err, data2) => {
//     console.log(data2);
//     fs.readFile(`starter/txt/append.txt`, 'utf-8', (err, data3) => {
//       console.log(data3);
//       fs.writeFile('start/txt/final.txt', `${data2}\n${data3}`, 'utf-8', err => { });
//       console.log('your file has been written')

//     });
//   });
// });
// console.log('will read file')

//////////////////////////////
const data = fs.readFileSync(`starter/dev-data/data.json`, 'utf-8');
const productD = JSON.parse(data);
//SERVER: 
const server = http.createServer((req, res) => {
  console.log(req.url);
  const pathname = req.url;
  if (pathname === '/' || pathname === '/overview') {
    res.end('This is the OVERVIEW');

  } else if (pathname === '/product') {
    res.end('This is the PRODUCT');
  } else if (pathname === '/api') {
    res.writeHead(200, { 'Content-type': 'application/json' });
    res.end(data);
  }
  else {
    res.writeHead(404, {
      'Content-type': 'text/html',
      'my-own-header': 'hello-world'
    });
    res.end('<h1>This page could not be found!</h1>');
  }
});

server.listen(8000, '127.0.0.1', () => {
  console.log("Server is listening to request on port: 8000")
})
