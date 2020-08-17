const express = require('express');
const loggRoute = express.Router();

// Logg model
let LoggModel = require('../models/Loggs');

loggRoute.route('/').get((req, res) => {
    LoggModel.find((error, data) => {
     if (error) {
       // eslint-disable-next-line no-undef
       return next(error)
     } else {
       res.json(data)
     }
   })
 })

 loggRoute.route('/create-logg').post((req, res, next) => {
    LoggModel.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});


loggRoute.route('/edit-logg/:id').get((req, res) => {
   LoggModel.findById(req.params.id, (error, data) => {
    if (error) {
      // eslint-disable-next-line no-undef
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update logg
loggRoute.route('/update-logg/:id').post((req, res, next) => {
  LoggModel.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data)
      console.log('Logg successfully updated!')
    }
  })
})

// Delete logg
loggRoute.route('/delete-logg/:id').delete((req, res, next) => {
  LoggModel.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = loggRoute;