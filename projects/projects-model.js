const db = require("../data/db-config");
module.exports = {
    getProjects,
    getProjectsbyId,
    getTasksbyId,
    getResources,
    getResourcebyId,
    insertProject,
    insertTask,
    insertResource,
}

function getProjects(){
    return db("Projects").select("*");
}
function getProjectsbyId(id){
    return db("Projects").select("*").first().where({"id":id});
}

function insertProject(data){
    return db("Projects").insert(data).then(id=>{
        return getProjectsbyId(id[0])
    });
}

function getTasksbyId(id){
    return db("Tasks").select("*").where({"ProjectId":id});
}

function insertTask(data){
    return db("Tasks").insert(data).then(id=>{
        return getTasksbyId(id[0])
    });
}
function getResources(){
    return db("Resources").select("*");
}
function getResourcebyId(id){
    return db("Resources").select("*").where({"id":id}).first();
}
function insertResource(data){
    return db("Resources").insert(data).then(id=>{
        return getResourcebyId(id[0])
    });
}


