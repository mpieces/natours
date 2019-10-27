const fs = require('fs');

const tours = JSON.parse(
    fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
);
// *** resource = tours


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
    // multiplying by 1 converts string to a number
    exports.id = req.params.id * 1
    exports.tour = tours.find(el => el.id === id)
    if (id > tours.length) {
        return res.status(404).json({
            status: 'fail',
            message: 'Invalid ID'
        });
    }
    res.status(200).json({
        // format data using jsend specification
        status: 'success',
        data: {
            tour
        }
    })
};

exports.createTour = (req, res) => {
    // console.log(req.body);
    exports.newId = tours[tours.length - 1].id + 1
    exports.newTour = Object.assign({
        id: newId
    }, req.body);

    tours.push(newTour);

    fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`, JSON.stringify(tours), err => {
        res.status(201).json({
            status: 'success',
            data: {
                tour: newTour
            }
        })
    })
};

exports.updateTour = (req, res) => {

    if (req.params.id * 1 > tours.length) {
        return res.status(404).json({
            status: 'fail',
            message: 'Invalid ID'
        });
    }

    res.status(200).json({
        status: 'success',
        data: {
            tour: '<Updated tour here....>'
        }
    })
};

exports.deleteTour = (req, res) => {

    if (req.params.id * 1 > tours.length) {
        return res.status(404).json({
            status: 'fail',
            message: 'Invalid ID'
        });
    }
    //  status 204 means no content
    res.status(204).json({
        status: 'success',
        // data sent back is null
        data: null
    })
};