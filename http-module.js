let http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end("You are on the homepage!");
    }
    if(req.url === '/about'){
        res.end("Here, you can know about ourselves!");
    }
    res.end(`
    <h1>Opps!</h1>
    <p>Error 404! We cannot find page you are looking for</p>
    <a href="/">Back home</a>
    `)
})

server.listen(5000);