const express = require('express')
const app = express()
const port = 3000

let institutes={
    1:{
        name:'IIT D',
        sewage: 10000,
        education: 50,
        hunger:1000,
        dormitory:50,
        health:20
    },
    2:{
        name:'GTBIT',
        sewage: 1000,
        education: 2,
        hunger:10,
        dormitory:4,
        health:7
    },
    3:{
        name:'BITS',
        sewage: 7000,
        education: 10,
        hunger:80,
        dormitory:100,
        health:8
    }
}

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/data',(req,res)=> res.send(institutes));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))