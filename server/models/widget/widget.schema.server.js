var mongoose = require('mongoose');

var WidgetSchema = new mongoose.Schema({
  widgetType: {type: String, enum: ['HEADING', 'IMAGE', 'YOUTUBE', 'HTML']},
  courseId: {type: mongoose.Schema.ObjectId, ref: "CourseModel"},
  name: String,
  text: String,
  placeholder: String,
  description: String,
  url: String,
  width: String,
  height: String,
  rows: Number,
  size: Number,
  class: String,
  icon: String,
  deletable: Boolean,
  formatted: Boolean,
  dateCreated: {type:Date, default: Date.now()}
}, {collection: 'widget'});

module.exports = WidgetSchema;
