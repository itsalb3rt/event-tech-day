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
    talksModel.findAll({
            where: {
                id: req.params.id
            }
        })
        .then(talk => {
            res.send(talk);
        })
        .catch(error => {
            res.send(error);
        })
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
        .catch(error => {
            res.status(400).send('Error in insert new record');
        })
});

routerTalks.put('/:id', (req, res) => {
    let updateEvent = req.body;
    updateEvent.updatedAt = Date.now();

    talksModel.update(updateEvent, {
            where: {
                id: req.params.id
            }
        })
        .then(talk => {
            res.send(talk);
        })
        .catch(error => {
            res.status(400).send('Error in insert new record');
        })
})

routerTalks.delete('/:id', (req, res) => {

    talksModel.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(() => {
            res.send('deleted');
        })
        .catch(error => {
            res.status(400).send(error);
        })
})

export default routerTalks;