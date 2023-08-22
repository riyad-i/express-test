const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    console.log(req.method);

    res.send('<h1>Hello World!</h1>')
})

app.post('/', (req, res) => {
    console.log(req.method);

    res.send('<h1>Post method</h1>')
})

app.get('/home', (req, res) => {
    console.log(req.method);
    res.send("<h1>Home Page</h1>")
})

app.get('/posts', (req, res) => {
    console.log(req.method);

    res.send('<h1>All posts</h1>')
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})