import express from 'express'
const route = express.Router()

route.get('/',(req,res)=>{res.send('test')})

export default route