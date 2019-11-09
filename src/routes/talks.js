import express from 'express'
import talksModel from './../models/talks'

var routerTalks = express.Router();

routerTalks.get('/', (req, res) => {

    talksModel.findAll()
        .then(talks => {
            res.send(talks);
        })
        .catch(error => {
            res.send(error);
        })

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