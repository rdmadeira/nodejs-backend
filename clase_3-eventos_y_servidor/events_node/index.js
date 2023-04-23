const http = require('http');

const PORT = 8080

const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/html"})
    res.write(`
    <h1>5 mensaje con servidor node<p>
    `)
        
    res.end('Ok baby!!!')   ;
})


server.listen(PORT, (err) => {
    if(err) {
        console.log('Error: ' + err);
        return
    }
    
    console.log(`Servidor iniciado en el puerto: ${PORT}`);
})
