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
    let newEvent = req.body;
    newEvent.createAt = Date.now();

    talksModel.create({
        name: newEvent.name,
        tags: newEvent.tags,
        id_speaker: newEvent.id_speaker,
        time: newEvent.time,
        createdAt: newEvent.createAt
    })
    .then(talk => {
        res.send(talk);
    })
    .catch( error => {
        res.status(400).send('Error in insert new record');
    })
});

routerTalks.put('/:id', (req, res) => {
    //Update
    res.send('update talk');
})

export default routerTalks;