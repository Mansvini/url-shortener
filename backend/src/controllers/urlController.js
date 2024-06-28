const Url = require('../models/urlModel');
const crypto = require('crypto');

exports.generateUrl = async (req, res) => {
  const { originalUrl, usageLimit } = req.body;
  const hashedUrl = crypto.createHash('sha256').update(originalUrl + req.user._id).digest('hex').slice(0, 8);

  let url = await Url.findOne({ originalUrl, user: req.user._id });
  if (url) {
    return res.status(200).json(url);
  }

  url = new Url({ 
    originalUrl, 
    hashedUrl, 
    usageLimit: usageLimit !== undefined ? usageLimit : Infinity, 
    user: req.user._id 
  });

  await url.save();
  res.status(201).json(url);
};

exports.redirectUrl = async (req, res) => {
  const { hash } = req.params;
  const url = await Url.findOne({ hashedUrl: hash });

  if (url) {
    if (url.usageCount >= url.usageLimit) {
      return res.status(403).json({ error: 'URL usage limit exceeded' });
    }
    url.usageCount++;
    await url.save();
    return res.redirect(302, url.originalUrl);
  } else {
    res.status(404).json({ error: 'URL not found' });
  }
};