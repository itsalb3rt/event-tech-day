import express from 'express'
import speakersModel from './../models/speakers'

var routerSpeakers = express.Router();

routerSpeakers.get('/', (req, res) => {

    speakersModel.findAll()
        .then(speakers => {
            res.send(speakers);
        })
        .catch(error => {
            res.send(error);
        })

});

routerSpeakers.get('/:id', (req, res) => {
    speakersModel.findAll({
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

routerSpeakers.post('/', (req, res) => {
    let newEvent = req.body;

    speakersModel.create(newEvent)
        .then(talk => {
            res.send(talk);
        })
        .catch(error => {
            res.status(400).send(error.errors);
        })
});

routerSpeakers.put('/:id', (req, res) => {
    let updateEvent = req.body;

    speakersModel.update(updateEvent, {
            where: {
                id: req.params.id
            }
        })
        .then(talk => {
            res.send(talk);
        })
        .catch(error => {
            res.status(400).send(error.errors);
        })
})

routerSpeakers.delete('/:id', (req, res) => {

    speakersModel.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(() => {
            res.send('deleted');
        })
        .catch(error => {
            res.status(400).send(error.errors);
        })
})

export default routerSpeakers;