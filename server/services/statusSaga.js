const { VIDEO_STATUS_IN_USE, VIDEO_STATUS_OLD } = require('../../config');

module.exports = {
  VIDEO_STATUS_NEW: VIDEO_STATUS_IN_USE,
  VIDEO_STATUS_IN_USE: VIDEO_STATUS_OLD,
  VIDEO_STATUS_OLD,
};
