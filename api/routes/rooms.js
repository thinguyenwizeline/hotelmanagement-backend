const express = require('express');
const router = express.Router();

router.get('/',(req,res,next) =>{
    res.status(200).json({
        message: 'Handling GET request /rooms'
    });
});


router.post('/',(req,res,next) =>{
    const room = {
        id: req.body.id,
        price: req.body.price,
        level: req.body.price,
        status: req.body.status,
        customerName: req.body.customerName,
        startDate : req.body.startDate,
        endDate: req.body.endDate
    };
    res.status(201).json({
        message: 'Room created successfully',
        createdRoom: room
    });
});

router.get('/:roomId',(req,res,next) =>{
    const id = req.params.roomId;
    if (id === 'speacial'){
        res.status(200).json({
            message: 'You discovered special one'
        });
    } else {
        res.status(200).json({
            message: 'You passed ID'
        });
    }

});

router.patch('/:roomId',(req,res,next) =>{
    res.status(200).json({
        message: 'Updated Room'
    });
});

router.delete('/:roomId',(req,res,next) =>{
    res.status(200).json({
        message: 'Deleted Room'
    });
});


module.exports = router;