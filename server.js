const express = require('express')
const path = require("path")
const app = express()
const PORT = 8000

// app.get('/', (request, response) => {
//     response.send("server")
// })

app.use(express.static(path.join(__dirname, "client", "build")))

app.listen(PORT, () => {
    console.log(`listeing to port ${PORT}`)
})

