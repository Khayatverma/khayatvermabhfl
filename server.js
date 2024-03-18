import express from 'express';
import bodyParser from 'body-parser';
const app = express();
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: true });
app.post('/bhfl',jsonParser,(req,res)=>{
   
    var {data} = req.body;
    var char = [];
    var odd = [];
    var even = [];
    for(let i = 0;i<data.length;i++)
    {
        if(data[i]!="[" && data[i]!="]")
        {
            if(data[i]%2 == 0)
            {
                even.push(data[i]);
            }
            if(data[i]%2!==0)
            {
                odd.push(data[i]);
            }
            else
            {
                char.push(data[i]);
            }
        }
    }
    res.json({"body":{
        Status:"ok",
        UserName:"KhayatVerma_26122003",
        Email:"khayat0765.be21@chitkara.edu.in",
        rollno:"2110990765",
        data:{
            char,
            odd,
            even
        }
    }});
})
app.listen(5713,(err)=>{
    console.log('server started');
})