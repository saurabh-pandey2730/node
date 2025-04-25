
import express, { urlencoded } from 'express'
import morgan from 'morgan'
import router from './router/user.router.js'
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
 let app =   express()
app.set('view engine', 'ejs')  
 app.use(express.json())  
 app.use(express.urlencoded())
app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, 'public')))
 let port = 3001 


 app.use('/',router)




 app.listen(port,()=>{
    console.log(`server is running on port }`)
 })
















//     import express from 'express'
//     import path   from  'node:path'
//     import https from 'node:https'
//     import { fileURLToPath } from 'url'
//     import fs from 'node:fs'
//     const __filename = fileURLToPath(import.meta.url)
// const __dirname = path.dirname(__filename)
//     let app   =   express()

//     const port=3000


//      const products=[
//         {id:1,name:"product1",price:1000},
//         {id:2,name:"product2",price:3000},
//         {id:3,name:"product3",price:3000},
// ]

     
//     //  routes 
//     app.get("/",(req,res)=>{       // https://localhost:3000/
//         res.send("Hello world home page")
//     })
//     app.get("/about",(req,res)=>{        // http://localhost:3000/about
//         res.sendFile( path.join(__dirname,"public",'index.html') )
//     })

//     app.get('/products',(req,res)=>{
//         res.send("<h1>products page</h1>")   //https://localhost:3000/products/5
//     })
//     app.get('/products/:id',(req,res)=>{
//         //   console.log(req.params.id)
//         let productId = req.params.id 
//         //  console.log(productId)
//         // res.send("this is product id page")
//         res.send(products[productId].name)
//     })
  

// // create a server with dynamic urls , emplyee data 

//     https.createServer({
//         key: fs.readFileSync('C:/certs/private.key'),
//         cert: fs.readFileSync('C:/certs/certificate.crt')
//     },app).listen(port,()=>{
//         console.log(`server is running on port ${port}`)
//     })


    