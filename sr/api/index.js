const express = require('express');
const app = express();
let fs = require('fs');
app.use(express.json());

app.use((req, res, next) => {
    const ALLOW_ORIGIN = [ 
        'http://127.0.0.1', 
        'http://127.0.0.1:88', 
        'http://localhost:88', 
        'http://127.0.0.1:5500', 
        'http://localhost:5500', 
        'http://localhost']                     
    const ORIGIN = req.headers.origin 
                                
    if (ALLOW_ORIGIN.includes(ORIGIN)) {
    res.header('Access-Control-Allow-Origin', ORIGIN)
    }

    res.header('Access-Control-Allow-Methods','POST, GET, PUT, PATCH, DELETE, OPTIONS')
    res.header('Access-Control-Allow-Headers','Content-Type, Option, Authorization')
    next()
  });
  
app.get('/', (req, res) => {
    res.writeHead(200, { 'content-type': 'text/html' })
    fs.createReadStream('index.html').pipe(res)
});


//////// SR ///////--------------------------------------------------->>>

app.get('/lane/1', (req, res) => {
    res.writeHead(200, { 'content-type': 'text/html' })
    fs.createReadStream('sr/lane.html?l=1').pipe(res)
});

app.get('/api/lanes/1', (req, res) => {
        res.send(
            {"name":"Far","lane":1,"unit":0,"enable":1,"time":new Date(),"light1":0,"light2":0,"light3":0,"channels":[0,0,1,0]}
        );
    });

    app.get('/api/lanes/2', (req, res) => {
        res.send(
            {"name":"Near","lane":2,"unit":4,"enable":1,"time":new Date(),"light1":0,"light2":0,"light3":0,"channels":[0,0,1,0]}
        );
    });

    app.get('/api/lanes/3', (req, res) => {
        res.send(
            {"name":"Near","lane":3,"unit":4,"enable":1,"time":new Date(),"light1":1,"light2":0,"light3":0,"channels":[0,0,1,0]}
        );
    });

    app.get('/api/lanes/4', (req, res) => {
        res.send(
            {"name":"Unassign","lane":4,"unit":1,"enable":1,"time":new Date(),"light1":0,"light2":0,"light3":0,"channels":[0,0,1,0]}
        );
    });
    app.get('/api/lanes/5', (req, res) => {
        res.send(
            {"name":"Unassign","lane":5,"unit":1,"enable":1,"time":new Date(),"light1":0,"light2":1,"light3":0,"channels":[0,0,1,0]}
        );
    });
    app.get('/api/lanes/6', (req, res) => {
        res.send(
            {"name":"PIO Comp","lane":6,"unit":1,"enable":1,"time":new Date(),"light1":0,"light2":0,"light3":0,"channels":[0,0,1,0]}
        );
    });
    app.get('/api/lanes/7', (req, res) => {
        res.send(
            {"name":"PIO Comp","lane":7,"unit":1,"enable":1,"time":new Date(),"light1":0,"light2":0,"light3":1,"channels":[0,0,1,1]}
        );
    });
 

    app.get('/api/standards/1', (req, res) => {
        res.send(
            {"total":32,"min":4,"max":12,"stdEnable":1,"minEnable":0,"maxEnable":0}
        );
    });    


    app.get('/server', (req, res) => {
        res.send(
            {"status":true}
        );
    });    

const port = process.env.PORT || 91
app.listen(port, () => console.log(`Listening on port : ${port}...`) );