const http = require('http')

const port = 5200;

const server = http.createServer((req, res)=> {
    res.end(
       ` <html>
            <head>
                <title>First Node App</title>
            </head>
            <body>
                <h1>Welcome to my node app</h1>
            </body>
        </html>`
    );
})

server.listen(port, () => {
    console.log(`Server is now listening on port ${port}`)
})