var mongoose = require('mongoose');

var restaurantSchema = new mongoose.Schema({
  id: {type: Number, unique: true},
  articles: [Number]
});

var Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;