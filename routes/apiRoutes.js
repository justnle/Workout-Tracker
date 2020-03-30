'use strict';

const db = require(`../models/Index`);

module.exports = app => {
  app.get(`/api/workouts`, (req, res) => {
    db.Workout.find({}).sort({ _id: -1})
      .then(dbWorkout => {
        const maxWorkouts = 10;
        res.json(dbWorkout.slice(0, maxWorkouts));
      }).catch(err => {
        res.json(err);
      });
  });

  app.get(`/api/workouts/range`, (req, res) => {
    db.Workout.find({}).sort({ _id: -1 }).then(dbWorkout => {
      const maxWorkouts = 10;
      res.json(dbWorkout.slice(0, maxWorkouts));
    }).catch(err => {
      res.json(err);
    });
  });

  app.post(`/api/workouts`, (req, res) => {
    db.Workout.create(req.body).then(dbWorkout => {
      res.json(dbWorkout);
    }).catch(err => {
      res.json(err);
    });
  });

  app.put(`/api/workouts/:id`, (req, res) => {
    db.Workout.findOneAndUpdate(
      { _id: req.params.id },
      { $push: { exercises: req.body } }
    ).then(dbWorkout => {
      res.json(dbWorkout);
    }).catch(err => {
      res.json(err);
    });
  });
};
