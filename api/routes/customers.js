const express = require('express');
const router = express.Router();

router.get('/',(req,res,next) =>{
    res.status(200).json({
        message: 'Handling GET request /rooms'
    });
});


router.post('/',(req,res,next) =>{
    const customer = {
        name: req.body.name,
        dateOfBirth: req.body.dateOfBirth,
        totalLiveDays: req.body.totalLiveDays,
        idNumber: req.body.idNumber,
        customerID: req.body.customerID,
        note : req.body.note,
        telephone: req.body.telephone,
        address: req.body.address
    };
    res.status(200).json({
        message: 'Customer created successfully',
        createdCustomer : customer
    });
});

router.get('/:customerId',(req,res,next) =>{
    const id = req.params.roomId;
    if (id === 'speacial'){
        res.status(200).json({
            message: 'You discovered special customer'
        });
    } else {
        res.status(200).json({
            message: 'You passed ID'
        });
    }

});

router.patch('/:customerId',(req,res,next) =>{
    res.status(200).json({
        message: 'Updated Customer'
    });
});

router.delete('/:customerId',(req,res,next) =>{
    res.status(200).json({
        message: 'Deleted Customer'
    });
});


module.exports = router;