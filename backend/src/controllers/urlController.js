const Url = require('../models/urlModel');
const crypto = require('crypto');

exports.generateUrl = async (req, res) => {
  const { originalUrl } = req.body;
  const hashedUrl = crypto.createHash('sha256').update(originalUrl).digest('hex').slice(0, 8);

  let url = await Url.findOne({ originalUrl });
  if (url) {
    return res.status(200).json(url);
  }

  url = new Url({ originalUrl, hashedUrl });
  await url.save();
  res.status(201).json(url);
};

exports.redirectUrl = async (req, res) => {
  const { hash } = req.params;
  const url = await Url.findOne({ hashedUrl: hash });

  if (url) {
    url.clicks++;
    await url.save();
    return res.redirect(url.originalUrl);
  } else {
    res.status(404).json({ error: 'URL not found' });
  }
};