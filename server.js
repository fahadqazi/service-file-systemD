const http = require('http')
const hostname = '0.0.0.0'
const colors = require('colors')
const port = 1337

http.createServer((req, res) => {
    res.writeHead(200, {'Content-type': 'text/plain'})
    res.end('Hello World\n')
}).listen(port, hostname, () => {
    console.log('Server running at ', port)
})
