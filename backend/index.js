// 0.create folder
// 1.npm init -y
// 2.npm i express cors body-parser
// 3.make proxy in frontend package.json


const express= require('express')
const cors= require('cors')
const bodyparser= require('body-parser')

const app= express()

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:false}))

const corsOptions={
    origin:'*',
    credentials:true,
    optionSuccessStatus: 200
}

app.use(cors(corsOptions))



const port= 4000
const server= app.listen(port,() =>{
    console.log('Server is runnin on port ${port}')
} )