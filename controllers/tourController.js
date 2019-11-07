// const fs = require('fs');
const Tour = require('./../models/tourModel');

// const tours = JSON.parse(
//     fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
// );

// checkBody middleware fxn to check if body contains the name and price properties
// if not, send back 400 (bad request)
// add it to the post handler stack
exports.checkBody = (req, res, next) => {
    if (!req.body.name || !req.body.price) {
        return res.status(400).json({
            status: 'fail',
            message: 'Missing name or price'
        });
    }
    next();
};

exports.getAllTours = (req, res) => {
    console.log(req.requestTime);
    res.status(200).json({
        // format data using jsend specification
        status: 'success',
        requestedAt: req.requestTime,
        results: tours.length,
        data: {
            tours
        }
    });
};

exports.getTour = (req, res) => {
    console.log(req.params);

    res.status(200).json({
        // format data using jsend specification
        status: 'success',
        data: {
            tours
        }
    });
};

exports.createTour = (req, res) => {
    // console.log(req.body);
    exports.newId = tours[tours.length - 1].id + 1;
    exports.newTour = Object.assign({
            id: newId
        },
        req.body
    );

    tours.push(newTour);

    fs.writeFile(
        `${__dirname}/dev-data/data/tours-simple.json`,
        JSON.stringify(tours),
        err => {
            res.status(201).json({
                status: 'success',
                data: {
                    tour: newTour
                }
            });
        }
    );
};

exports.updateTour = (req, res) => {
    res.status(200).json({
        status: 'success',
        data: {
            tour: '<Updated tour here....>'
        }
    });
};

exports.deleteTour = (req, res) => {
    //  status 204 means no content
    res.status(204).json({
        status: 'success',
        // data sent back is null
        data: null
    });
};