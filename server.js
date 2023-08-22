// const express = require('express')
// const app = express()
// const port = 3000


// app.get('/', (req, res) => {
//     console.log(req.method);

//     res.send('<h1>Hello World!</h1>')
// })

// app.post('/', (req, res) => {
//     console.log(req.method);

//     res.send('<h1>Post method</h1>')
// })

// app.get('/home', (req, res) => {
//     console.log(req.method);
//     res.send("<h1>Home Page</h1>")
// })

// app.get('/posts', (req, res) => {
//     console.log(req.method);

//     res.send('<h1>All posts</h1>')
// })



const express = require('express')
const fs = require('fs')

const app = express()
const port = 3000


//app template engine definition
app.engine('madeline', (filePath, options, callback)=> {
    fs.readFile(filePath, (err, content) => {
        //check if error reading file
        if (err) return callback(err)

        const rendered = content.toString()
            .replace('#title#', '<title>'+ options.title +'</title>')
            .replace('#message#', "<h1>"+ options.message + '</h1>')
            .replace('#content#', '<div>' + options.content + '</div>')

        console.log(rendered)
        return callback(null, rendered)
    })

})

//app config
app.set('views', './views')
app.set('view engine', 'madeline')



app.get('/', (req, res) => {
    res.render('template', {title: 'hey', message: 'first template engine', content: 'Nodejs and Express'})
})



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})