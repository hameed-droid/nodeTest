const express = require('express')
const router = express.Router()
const My = require('../models/my')

router.get('/',async(req,res)=>{
    try{
        const myRoute = await My.find()
        res.json(myRoute)
    }
    catch(err){
        res.send('Error '+err)
    }
    
})

router.get('/:id',async(req,res)=>{
    try{
        const myRoute = await My.findById(req.params.id)
        res.json(myRoute)
    }
    catch(err){
        res.send('Error '+err)
    }
    
})

router.patch('/:id',async(req,res)=>{
    try{
        const myRoute = await My.findById(req.params.id)
        myRoute.name =req.body.name
        const my1 = await myRoute.save()
        res.json(my1)
    }
    catch(err){
        res.send("Error!!! "+ err)
    }
})

router.delete('/:id',async(req,res)=>{
    try{
        await My.deleteOne({id: req.params.id})
        res.send("deleted!")
    }
    catch(err){
        res.send("Error!!! "+ err)
    }
})

router.post('/',async(req,res)=>{
    const my = new My({
        name: req.body.name,
        tech: req.body.tech,
        sub: req.body.sub
    })

    try{
        const my1 = await my.save()
        res.json(my1)
    }
    catch(err){
        res.send("error! " +err)
    }
})

module.exports = router