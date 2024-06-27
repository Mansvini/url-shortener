const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
  originalUrl: { type: String, required: true },
  hashedUrl: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  usageLimit: { type: Number, default: Infinity },
  usageCount: { type: Number, default: 0 }, 
});

module.exports = mongoose.model('Url', urlSchema);