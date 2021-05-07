const http = require("http");
const fs = require('fs');
var requests = require("requests");

const homeFile = fs.readFileSync("home.html","utf-8");
const server = http.createServer((req, res) => {
    if(req.url="/"){
requests(
  'http://api.openweathermap.org/data/2.5/weather?q=sitamarhi&appid=ae5ddecd7256a456c883c79e513e08d3'
  )
.on('data', (chunk) => {
  console.log(chunk);
})
.on('end',  (err) => {
  if (err) return console.log('connection closed due to errors', err);
 
  console.log('end');
});
    }

});
server.listen(8000,"127.0.0.1");