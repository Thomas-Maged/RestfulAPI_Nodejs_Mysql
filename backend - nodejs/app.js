const express = require('express');
var cors = require('cors')
var con;
const app = express();
var bodyParser = require('body-parser')



app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())

//Database connection

app.listen(3000, (req,res)=>{
    console.log('listening on port 3000')
});


app.get('/', (req,res) =>{
  con = require('./dbcon.js');
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    
  });

  //Creating, using Database
  con.query("CREATE DATABASE IF NOT EXISTS personsDatabase", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });

  con.query("USE personsDatabase", function (err,result) {
    if (err) throw err;
  })

  //Create Table
  con.query("create table if not exists person (id int primary key auto_increment, name varchar(50), age int, gender varchar(10), email varchar(50) )", function (err,result) {
    if (err) throw err;
    console.log('Table created');
  })
  res.send('Hello')
})


//View all people
app.get('/person', (req, res) => {

    con.query("select * from person", function (err,result) {
        if (err) throw err;
        res.send(result);
      })
})

//Add Person
app.post('/person', (req, res) => {

    console.log(req.body);
    con.query(`insert into person(name, age, gender, email) values('${req.body.name}',${req.body.age}, '${req.body.gender}','${req.body.email}')`, function (err,result) {
        if (err) throw err;
      })
    res.send("Added Successfully");
})

//Delete Person
app.delete('/person/:id', (req, res) => {


    con.query(`delete from person where id = '${req.params['id']}'`, function (err,result) {
        if (err) throw err;
        if (result.affectedRows == 0) {
            res.send('No person found with this ID');
            return;
        }
        res.send("Deleted Successfully");
      })
})

//Update Person
app.put('/person/:id', (req, res) => {


    if (req.body.name != ""  || req.body.name == 'undefined') {
        con.query(`update person set name = '${req.body.name}' where id = '${req.params['id']}'`, function (err,result) {
            if (err) throw err;
          })
    }

    if (req.body.age != "" || req.body.age == 'undefined') {
        con.query(`update person set age = '${req.body.age}' where id = '${req.params['id']}'`, function (err,result) {
            if (err) throw err;
          })
    }

    if (req.body.email != "" || req.body.email == 'undefined') {
        con.query(`update person set email = '${req.body.email}' where id = '${req.params['id']}'`, function (err,result) {
            if (err) throw err;
          })
    }
    res.end("updated Successfully");
})



