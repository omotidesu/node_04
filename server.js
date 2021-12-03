const express = require('express')

require('dotenv').config()
const host = process.env.HOST
const port = process.env.PORT
const defolt_name = process.env.LOGINNAME
const defolt_pass = process.env.PASSWORD



const app = express()

app.use(express.static(__dirname+'/public'))
app.use(express.urlencoded({extended:true}))

app.post('/auth',(req, res)=> {
    let message = 'ログインできません'
    const login_name = req.body.login_name
    const password = req.body.password
    console.log(login_name)
    console.log(password)
    console.log(defolt_name)
    console.log(defolt_pass)
    if(login_name == defolt_name&&password == defolt_pass){
        message='ログインしました'
    }
    res.send(message)
})
// app.post('/login',(req, res)=> {
//     if(extended){

//     }
//     let message = 'ログインできません'
//     const login = req.body.USERNAME
//     const pass = req.body.PASSWORD
//     console.log(login)
//     console.log(pass)
//     res.send(message)
// })



app.get('/',(req, res)=> {
    res.send('Hello YSE!!')
})
app.get('/profile',(req, res)=> {
    res.send('low')
})

app.listen(port,host, () =>{
    console.log('http://' + host + ':' + port)
})