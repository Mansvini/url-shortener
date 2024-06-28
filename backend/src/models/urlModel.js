const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
  originalUrl: { type: String, required: true },
  hashedUrl: { type: String, required: true },
  usageLimit: { type: Number, default: Infinity },
  usageCount: { type: Number, default: 0 }, 
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, 
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Url', urlSchema);