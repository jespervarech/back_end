"use strict";

var mongoose = require('mongoose');

var GradeSchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
    required: true
  },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
    required: true
  },
  grade: {
    type: Number,
    required: true,
    min: 0,
    max: 100
  },
  date: {
    type: Date,
    "default": Date.now
  }
});
module.exports = mongoose.model('Grade', GradeSchema);