const { Workout } = require("../models");
var db = require("../models");

module.exports = function(app) {
  app.get("/api/workouts", function(req, res) {
    db.Workout.find({}).then(function(data) {
      res.json(data);
    });
  });

  app.get("/api/workouts/range", function(req, res) {
    db.Workout.find({}).then(function(data) {
      res.json(data);
    });
  });

  app.post("/api/workouts", function(req, res) {
    db.Workout.create(req.body).then(function(data) {
      res.json(data);
    });
  });

  app.put("/api/workouts/:id", (req, res) => {
    // console.log(req.body)
    // const workout = new Workout({exercises: req.body});
    // workout.setTotalDuration();
    db.Workout.updateOne({ _id: req.params.id },{$push: {exercises: req.body}}).then(function(dbPost) {
      res.json(dbPost);
    });
  });
};