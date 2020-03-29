'use strict';

const db = require(`../models/Index`);

module.exports = app => {
  app.get(`/api/workouts`, (req, res) => {
    db.Workout.find({})
      .populate(`cardio`)
      .populate(`resistance`)
      .then(dbWorkout => {
        console.log(dbWorkout);
        res.json(dbWorkout);
      }).catch(err => {
        res.json(err);
      });
  });

  app.get(`/api/workouts/range`, (req, res) => {
    db.Workout.find({}).sort({ day: -1 }).then(dbWorkout => {
      res.json(dbWorkout.slice(0, 10));
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
