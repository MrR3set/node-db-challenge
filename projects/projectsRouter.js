const express = require('express');

const projects = require('./projects-model.js');

const router = express.Router();

router.get("/",(req,res)=>{
        projects.getProjects().then(data=>{
                res.status(200).json(data);
        }).catch(err=>{
                console.log(err);
                res.status(200).json({msg:"err"});
        })
})
router.get("/:id/project",(req,res)=>{
        projects.projectGetbyId(req.params.id).then(data=>{
                res.status(200).json(data);
        }).catch(err=>{
                console.log(err);
                res.status(200).json({msg:"err"});
        })
})
router.get("/:id/tasks",(req,res)=>{
        projects.getTasksbyId(req.params.id).then(data=>{
                res.status(200).json(data);
        }).catch(err=>{
                console.log(err);
                res.status(200).json({msg:"err"});
        })
})
router.get("/resources",(req,res)=>{
        projects.getResources().then(data=>{
                res.status(200).json(data);
        }).catch(err=>{
                console.log(err);
                res.status(200).json({msg:"err"});
        })
})
router.get("/:id/resources",(req,res)=>{
        projects.getResources().then(data=>{
                res.status(200).json(data);
        }).catch(err=>{
                console.log(err);
                res.status(200).json({msg:"err"});
        })
})
router.post("/",(req,res)=>{
        if(!(req.body.name)){
                res.status(400).json({msg:"bad_req"})
        }
        projects.insertProject(req.body).then(data=>{
                console.log(data);
                res.status(200).json(data);
        }).catch(err=>{
                console.log(err);
                res.status(200).json({msg:"err"});
        })
})
router.post("/resources",(req,res)=>{
        if(!(req.body.name)){
                res.status(400).json({msg:"bad_req"})
        }
        projects.insertResource(req.body).then(data=>{
                res.status(200).json(data);
        }).catch(err=>{
                console.log(err);
                res.status(200).json({msg:"err"});
        })
})
router.post("/:id/task",(req,res)=>{
        if(!(req.body.description)||!(req.params.id)){
                res.status(400).json({msg:"bad_req"})
        }
        projects.insertTask({...req.body,Projectid:req.params.id}).then(data=>{
                res.status(200).json(data);
        }).catch(err=>{
                console.log(err);
                res.status(200).json({msg:"err"});
        })
})







module.exports = router;