const needle = require('needle');

exports.getTrackPreviews = async (req, res) => {
  await needle.get(`https://${process.env.COUDINARY_PUBLIC_KEY}:${process.env.COUDINARY_PRIVATE_KEY}@api.cloudinary.com/v1_1/dnonz22ez/resources/video/tags/${req.params.dj}?max_results=50`, function (error, response) {
    if (!error && response.statusCode === 200)
      res.status(200).send(response.body)
  });
}