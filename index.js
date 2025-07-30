import express from 'express'

const app = express()

app.get('/',(req,res)=>{
    res.send('Hellow World')
})

app.use((req, res)=>{
    res.end('<a href="/"> Ir al Inicio</a>')
})

app.listen(3000)
console.log('Server on port', 3000)

