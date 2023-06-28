const mongoose = require("mongoose");

const currentDate = new Date();

const currentDayOfMonth = currentDate.getDate();
const currentMonth = currentDate.getMonth(); 
const currentYear = currentDate.getFullYear();

const _Date = currentDayOfMonth + "-" + (currentMonth + 1) + "-" + currentYear;


const BlogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  postedAt: {
    type: String,
    default:  _Date,
  },
});

module.exports = new mongoose.model("Blog", BlogSchema);
