// Iteration #1
const drones = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
];


const Drone = require("../models/Drone.model");

// insertarla en la BD
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/lab-express-drones")
  .then((response) => {
    console.log("conectados a la Dase de Datos");

  })
  .catch((err) => {
    console.log(err);
  });

  Drone.create(drones)
  .then(dronesFromDB => {
    console.log(`Created ${dronesFromDB.length} drones`);

    //Once created, close the DB connection
    mongoose.connection.close();
  })
  .catch(err => console.log(`An error occurred while creating drones from the DB: ${err}`));