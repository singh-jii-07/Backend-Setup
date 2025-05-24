import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
const app =express ()
app.use(cors({
    origin:process.env.CLIENT_URL,
}))
app.use (express.json({limit:'50mb'}))
app.use (express.urlencoded({limit:'50mb',extended:true}))
app.use(express.static("public"))
app.use(cookieParser())

export {app}