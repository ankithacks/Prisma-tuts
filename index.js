const cookieparser=require('cookie-parser')
const express=require('express')
require('dotenv').config()

const app=express()
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))
// cookie middleware:-
app.use(cookieparser())

const userRouter=require('./routes/userRoutes')
app.use('/api', userRouter)

const postRouter=require('./routes/postRoutes')
app.use('/api', postRouter)

app.get('/', (req,res)=>{
    res.send("hello localhost")
})

app.listen(3000, ()=>{
    console.log(`server started on port 3000`)
})