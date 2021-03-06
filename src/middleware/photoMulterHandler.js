const multer = require('multer');
const mongoose = require('mongoose');
var fs = require('fs');
const { LogicError } = require('../error/logicError');

/**
 * Creates and sets the directories where the files are going to be stored
 * @param  {function} destination
 * @param  {Object} req
 * @param  {Object} file
 * @param  {function} callback
 */
storage = multer.diskStorage({
    destination: function (req, file, callback) {
        if (!fs.existsSync('public')) {
            fs.mkdirSync('public');
        }
        if (!fs.existsSync('public/images')) {
            fs.mkdirSync('public/images');
        }
        if (!fs.existsSync(`public/images/${req.user._id}`)) {
            fs.mkdirSync(`public/images/${req.user._id}`);
        }
        callback(null, `public/images/${req.user._id}`);
    },
    filename: function (req, file, callback) {
        uniqueFileName = mongoose.Types.ObjectId();
        extension = file.originalname.split('.').pop();
        callback(null, uniqueFileName + '.' + extension);
    },
});
/**
 * checks the file extension and limits the size of uploaded files
 * @param  {Object} storage
 * @param  {Object} fileSize
 * @param  {function} fileFilter
 * @param  {Object} req
 * @param  {Object} file
 * @param  {function} callback
 */
module.exports.upload = multer({
    storage: storage,
    limits: {
        fileSize: 10000000,
    },
    fileFilter(req, file, callback) {
        if (!file.originalname.match(/\.(png|jpg|tiff)$/i)) {
            return callback(new LogicError(400, 'Invalid file extension'));
        }
        req.body.file = true;
        callback(undefined, true);
    },
});
