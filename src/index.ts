/*
import Matematica from './matematica'

import Filmes from './filmes'

let n1: number = 10
let n2: number = 20

console.log("soma:"+Matematica.somar(n1,n2))

console.log("subtrair: "+Matematica.subtrair(n1,n2))

console.log("multiplicar: "+Matematica.multiplicar(n1,n2))


console.log(Filmes)*/


//importando express
import  express  from 'express'
import { Server } from 'http'
import { fileURLToPath } from 'url'


//usando express
const server = express()

server.listen(3000)
//rota estatica
server.get('/tratamentos',(req,res) =>{
    res.send ('Pagina de tratamentos')
})
//rota dinamica
server.get ('/passagens/:origem-:destino',(req,res) =>{
    let origem : string =req.params.origem
    let destino : string =req.params.destino

    res.send(`passagem de ${origem} com destino até ${destino}`)
})
