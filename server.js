import next from 'next'
import {createServer} from 'node:http'
import {Server} from 'socket.io'

// dev
const dev = process.env.NODE_ENV !== "production"
// hostname
const hostname = "localhost"
// port
const port = 5000 

// app
const app = next({dev,hostname,port})
// handler
const handler = app.getRequestHandler()

// starting
app.prepare().then(()=>{
    // http server
    const httpServer = createServer(handler)
    // io
    const io = new Server(httpServer)

    // io connection
    io.on('connection',socket => {
        console.log("SOCKET.IO")
    })

    // listening
    httpServer
        .once("error", error => {
            console.log(error)
            process.exit(1)
        })
        .listen(port,()=>{
            console.log(`running http://${hostname}:${port}`)
        })
})