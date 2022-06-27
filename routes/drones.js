const express = require('express');
const { findOneAndRemove } = require('../models/Drone.model');
const Drone = require('../models/Drone.model');
const router = express.Router();

// require the Drone model here

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  Drone.find()
  .then((response) => {
    console.log(`Este console es para la lista completa`, response);
    res.render("drones/list.hbs", {response});
  })
  .catch((err) => {
    next(err);
  });
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render("drones/create-form.hbs")
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
    console.log(req.body);
    const name = req.body.name
    const propellers = req.body.propellers
    const maxSpeed = req.body.maxSpeed
    Drone.create({
      name,
      propellers,
      maxSpeed
    })
    .then((response)=>{
      res.redirect("/drones")
    })
    .catch((e)=>console.log(e))
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  const { id } = req.params;
  console.log("Console del Drone delete");

  Drone.findByIdAndDelete(id)
    .then(()=>{
      console.log("Eliminado correctamente")
      res.redirect("/drones")
    })
    .catch(e=>console.log(e))
});

module.exports = router;
