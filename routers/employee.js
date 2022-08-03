const express=require('express')
const emp = require('../models/emp')
const router=express.Router()
const Emp=require('../models/emp')

router.get('/',async(req,res)=>{
    try{
const emp=await Emp.find()
res.json(emp)
    }
        catch(err){
            res.send('Error '+err)
        }
})
router.get('/:id',async(req,res)=>{
    try{
const emp=await Emp.findById(req.params.id)
res.json(emp)
    }
        catch(err){
            res.send('Error '+err)
        }
})
router.post('/',async(req,res)=>{
    const employee=new Emp({
      Fname:req.body.Fname,
      Lname:req.body.Lname
    })
    try{
       const a1=  await employee.save()
       res.json(a1)
    }
    catch(err){
        res.send('Error '+err)
    }
})
router.put('/:id',async(req,res)=>{
    try{
         const emp=await Emp.findById(req.params.id)
         emp.Fname=req.body.Fname,
         emp.Lname=req.body.Lname
         const a1=await emp.save()
         res.json(a1)
    }
    catch(err){
        res.send('Error '+err)
    }
})
router.delete('/:id',async(req,res)=>{
    const id=req.params.id
    // if(!err){
    //     if(id===JSON.stringify(docs)['_id']){
    //         res.json('deleted sucessfully')
    //     }
    //     else if(JSON.stringify(docs)==='null'){
    //         res.json('No data to delete')
    //     }
    // }
   
     
    
         
    //     else{
    //         res.send('Error '+err)
    //      }
    // })
   
     try{
        await Emp.findByIdAndDelete(id);
       // res.json(await Emp.find())
   res.send('deleted sucessfully')
     
    
        
    }
        catch(err){
            res.send('Error '+err)
         }
    })
module.exports=router