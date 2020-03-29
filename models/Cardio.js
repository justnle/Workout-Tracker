'use strict';

const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;
const opts = { toJSON : { virtuals: true } };

const CardioSchema = new Schema({
  name: {
    type: String,
    trim: true,
    minlength: 1
  },
  distance: {
    type: Number,
    min: 1
  }
}, opts);

CardioSchema.virtual(`type`).get(() => `cardio`);

const Cardio = mongoose.model(`Cardio`, CardioSchema);

module.exports = Cardio;
