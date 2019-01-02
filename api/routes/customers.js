const express = require('express');
const router = express.Router();

router.get('/',(req,res,next) =>{
    res.status(200).json({
        message: 'Handling GET request /rooms'
    });
});


router.post('/',(req,res,next) =>{
    res.status(200).json({
        message: 'Handling POST request /rooms'
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