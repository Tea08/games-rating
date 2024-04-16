const config = require("./config")
const makeRatingFile = require("./rating-file")
const { createRating, updateRating } = require("./calculation")

module.exports = {
   config,
   makeRatingFile,
   createRating,
   updateRating,
}