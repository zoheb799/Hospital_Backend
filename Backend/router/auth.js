const { request, response } = require('express');
const express = require('express');
const router = express.Router();

require('../db/conn');
const List = require("../models/hospital");


router.get('/', (request, response) => {
    response.send("hello world!");
});
router.post('/multihospital', (request, response) => {
    const { Name, Ratings, Speciality, Address, Website, Gmap } = request.body;
    if (!Name || !Ratings || !Speciality || !Address || !Website || !Gmap) {
        return response.status(422).json({ err: "blanks cannot be empty" });
    }
    List.findOne({ Name: Name })
        .then((userexist) => {
            if (userexist) {
                return response.status(422).json({ err: "this Hospital is already exist" });
            }
            const Lists = new List({ Name, Ratings, Speciality, Address, Website, Gmap });

            Lists.save().then(() => {
                response.status(201).json({ message: "hospital entered" });
            }).catch((err) => response.status(500).json({ err }));
        }).catch(err => { console.log({ err: "error hai yaaro" }); });
});
router.get('/multihospital', (request, response) => {

    List.find()
        .then((users) => {
            response.json(users);
            response.status(201).json({ message: "hospital fetched" });
        }).catch(err => { console.log({ err: "there's an error!" }); });
});
router.put('/multihospital/:id', async (request, response) => {
    try {
        const id = request.params.id;
        let list = await strategy.findByIdAndUpdate(id, request.body, {
            new: true,
        });
        console.log(list);
        response.json({
            message: "list updated successfully",
            strategy: list,
        });
    } catch (error) {
        response.json({
            message: "error while updating",
            error: error,
        });
    }
});

router.post('/affordable', (request, response) => {
    const { Name, Ratings, Speciality, Address, Website, Gmap } = request.body;
    if (!Name || !Ratings || !Speciality || !Address || !Website || !Gmap) {
        return response.status(422).json({ err: "blanks cannot be empty" });
    }
    List.findOne({ Name: Name })
        .then((userexist) => {
            if (userexist) {
                return response.status(422).json({ err: "this Hospital is already exist" });
            }
            const Lists = new List({ Name, Ratings, Speciality, Address, Website, Gmap });

            Lists.save().then(() => {
                response.status(201).json({ message: "hospital entered" });
            }).catch((err) => response.status(500).json({ err }));
        }).catch(err => { console.log({ err: "error hai yaaro" }); });
});
router.get('/affordable', (request, response) => {

    List.find()
        .then((users) => {
            response.json(users);
            response.status(201).json({ message: "hospital fetched" });
        }).catch(err => { console.log({ err: "there's an error!" }); });
});
router.post('/govt', (request, response) => {
    const { Name, Ratings, Speciality, Address, Website, Gmap } = request.body;
    if (!Name || !Ratings || !Speciality || !Address || !Website || !Gmap) {
        return response.status(422).json({ err: "blanks cannot be empty" });
    }
    List.findOne({ Name: Name })
        .then((userexist) => {
            if (userexist) {
                return response.status(422).json({ err: "this Hospital is already exist" });
            }
            const Lists = new List({ Name, Ratings, Speciality, Address, Website, Gmap });

            Lists.save().then(() => {
                response.status(201).json({ message: "hospital entered" });
            }).catch((err) => response.status(500).json({ err }));
        }).catch(err => { console.log({ err: "error hai yaaro" }); });
});
router.get('/govt', (request, response) => {

    List.find()
        .then((users) => {
            response.json(users);
            response.status(201).json({ message: "hospital fetched" });
        }).catch(err => { console.log({ err: "there's an error!" }); });
});
router.post('/hosp', (request, response) => {
    const { Name, Ratings, Speciality, Address, Website, Gmap } = request.body;
    if (!Name || !Ratings || !Speciality || !Address || !Website || !Gmap) {
        return response.status(422).json({ err: "blanks cannot be empty" });
    }
    List.findOne({ Name: Name })
        .then((userexist) => {
            if (userexist) {
                return response.status(422).json({ err: "this Hospital is already exist" });
            }
            const Lists = new List({ Name, Ratings, Speciality, Address, Website, Gmap });

            Lists.save().then(() => {
                response.status(201).json({ message: "hospital entered" });
            }).catch((err) => response.status(500).json({ err }));
        }).catch(err => { console.log({ err: "error hai yaaro" }); });
});
router.get('/hosp', (request, response) => {

    List.find()
        .then((users) => {
            response.json(users);
            response.status(201).json({ message: "hospital fetched" });
        }).catch(err => { console.log({ err: "there's an error!" }); });
});

module.exports = router;
