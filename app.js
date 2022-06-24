const express = require('express')
const morgan = require('morgan')
const app = express()

//1) MIDDLEWARE
app.use(morgan('dev'))
app.use(express.json()) //middleware per usare json file
app.use(express.static(`${__dirname}/public`))


//2) ROUTE HANDLERS
app.post('/', (req, res)=>{
    res.send('prova post endpoint...')
})

const getHomePage = (req,res) => {
    res.status(200).json({message: 'Hello from server side', app: 'pss'})
}

//3) ROUTES
app.route('/index.html').get(getHomePage)


//4) START SERVER
const port = 3000

app.listen(port, () => {
    console.log(` App running on port ${port}...` );
});