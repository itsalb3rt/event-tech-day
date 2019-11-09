import express from 'express'
import mysql from 'mysql'

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'event_tech_day'
});

connection.connect();

var routerTalks = express.Router();

routerTalks.get('/', (req, res) => {

    connection.query('SELECT * FROM talks', function (err, rows, fields) {
        if (err) {
            res.send('Error ' + err)
        } else {
            res.setHeader('Content-Type','application/json')
            res.send('The solution is: ' + rows[0].name)
        }
    });

});

routerTalks.get('/:id', (req, res) => {
    res.send('talk id ' + req.params.id)
});

routerTalks.post('/', (req, res) => {
    //Save
    res.send('save talk');
});

routerTalks.put('/:id', (req, res) => {
    //Update
    res.send('update talk');
})

export default routerTalks;