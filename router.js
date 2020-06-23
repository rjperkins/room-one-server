const router = require('express').Router();
const djList = require('./controllers/controller.djList');
const recordLabel = require('./controllers/controller.recordLabel');

router.get('/dj-list', djList.getdjList);
router.get('/galleryUrls', djList.getGalleryURLs);
router.get('/track-previews/:dj', recordLabel.getTrackPreviews);

module.exports = router;