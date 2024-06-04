const app = require('express')();
const fs = require('fs')

const PORT = 4000;
 
app.listen(PORT,()=>{
    console.log(`The port is working on http://localhost:${PORT}`)

})



//the end point is http://localhost:4000/employees
app.get('/employees',(req,res)=>{
    let data;
    fs.readFile('/Users/ricardofeliz/Desktop/Node-Gi/currentEmployees.json','utf8',(err,data)=>{
        if(err)console.log(err)
        data = JSON.parse(data)
        let renderdData = JSON.stringify(data);
       
        res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(renderdData);
    })

    
})


app.get('/employees/employeeID',(req,res)=>{
     const employeeID= parseInt(req.params.employeeID);
     const employee  = employees.find(emp => emp.employeeID === employeeID);
    if(!employee){
        return res.status(404).json({error: 'employee not found'})
    }
    res.json(employee);
})





