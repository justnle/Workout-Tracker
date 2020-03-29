'use strict';

const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;
const opts = { toJSON : { virtuals: true } };

const ResistanceSchema = new Schema({
  name: {
    type: String,
    trim: true,
    minlength: 1
  },
  weight: {
    type: Number,
    minlength: 1
  },
  sets: {
    type: Number,
    minlength: 1
  },
  reps: {
    type: Number,
    minlength: 1
  },
  duration: {
    type: Number,
    minlength: 1
  }
}, opts);

ResistanceSchema.virtual(`type`).get(() => `resistance`);

const Resistance = mongoose.model(`Resistance`, ResistanceSchema);

module.exports = Resistance;
