const fs = require('fs');
const http = require('http');

const server = http.createServer();
server.on('request',(requset,response)=>{
    const stream = fs.createReadStream('./big_file.txt');
    stream.pipe(response)
})

server.listen(8888)