const multer = require('multer');

const fileUpload = multer({
  storage: multer.diskStorage({}),
});

module.exports = { fileUpload };
