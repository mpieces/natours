// const fs = require('fs');
const Tour = require('./../models/tourModel');

// const tours = JSON.parse(
//     fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
// );

exports.getAllTours = (req, res) => {
    console.log(req.requestTime);
    res.status(200).json({
        // format data using jsend specification
        status: 'success',
        requestedAt: req.requestTime,
        // results: tours.length,
        // data: {
        //     tours
        // }
    });
};

exports.getTour = (req, res) => {
    console.log(req.params);

    // res.status(200).json({
    //     // format data using jsend specification
    //     status: 'success',
    //     data: {
    //         tours
    //     }
    // });
};

exports.createTour = async (req, res) => {
    try {
        const newTour = await Tour.create(req.body);

        res.status(201).json({
            status: 'success',
            data: {
                tour: newTour
            }
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        });
    }
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