const { validationResult, body, param } = require('express-validator');
const { RequestValidationError } = require('../error/request-validation');

const validateRequest = (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) throw new RequestValidationError(errors.array());
    next();
};

//Body Validations
const validateChangePassword = [
    body('oldPass')
        .isString()
        .withMessage('Old password is required')
        .isLength({ min: 8 })
        .withMessage('Old Password must be more than 8 characters'),
    body('newPass')
        .isString()
        .withMessage('Password is required')
        .isLength({ min: 8 })
        .withMessage('New Password must be more than 8 characters'),
];
const validateUserIdBody = [
    body('userId').isMongoId().withMessage('User Id to be followed is missing'),
];
const validateRegisterWithFacebook = [
    body('accessToken').isString().withMessage('Access Token is missing'),
];
const validatePhotoId = [
    body('photoId').isMongoId().withMessage('Photo Id is missing'),
];
const validateEditInfo = [
    body('occupation')
        .optional()
        .isString()
        .withMessage('Occupations should be a String'),
    body('currentCity')
        .optional()
        .isString()
        .withMessage('Current City should be a String'),
    body('homeTown')
        .optional()
        .isString()
        .withMessage('Home Town should be a String'),
];
const validateSignUp = [
    body('email').isEmail().withMessage('Email is required'),
    body('password')
        .isString()
        .withMessage('Password is required')
        .isLength({ min: 8 })
        .withMessage('Password must be more than 8 characters'),
    body('firstName').isString().withMessage('First Name is required'),
    body('lastName').isString().withMessage('Last Name is required'),
    body('age').isNumeric().withMessage('Age is required'),
];
const validateLogIn = [
    body('email').isEmail().withMessage('Email is required'),
    body('password').isString().withMessage('Password is required'),
];
const validatePhotoUpload = [
    body('file').exists().withMessage('File is required'),
    body('title').isString().withMessage('Title is required'),
    body('contentType').isString().withMessage('Content Type is required'),
    body('isPublic')
        .optional()
        .isBoolean()
        .withMessage('Is Public should be boolean'),
    body('allowCommenting')
        .optional()
        .isBoolean()
        .withMessage('Allow Commenting should be boolean'),
    body('license')
        .optional()
        .isString()
        .withMessage('license should be string'),
    body('description')
        .optional()
        .isString()
        .withMessage('Description should be string'),
    body('safetyOption')
        .optional()
        .isString()
        .withMessage('Safety Option should be string'),
];
const validateUserEmailBody = [
    body('email').isEmail().withMessage('Email is required'),
];
const validateTag = [
    body('tag').isString().withMessage('Tag name is required'),
];

const validateComment = [
    body('comment').isString().withMessage('Please write your Comment'),
]

const validateShowCaseDescription = [
    body('description').isString().withMessage('Description is required'),
    body('showCase.title').isString().withMessage('ShowCaseTitle is required'),
    body('showCase.photos')
        .optional()
        .isArray()
        .withMessage('Photos IDs Missing'),
];
const validateCommentId = [
    body('commentId').isMongoId().withMessage('Comment ID Missing'),
];
//Params Validations
const validatePhotoIdParam = [
    param('photoId').isMongoId().withMessage('PhotoId is required'),
];

const validateUserIdParam = [
    param('userId').isMongoId().withMessage('UserId is required'),
];

const validateTagParam = [
    param('tagName').isString().withMessage('Tag Name is Required'),
];

const validateCreateAlbum = [
    body('title').isString().withMessage('Title is required'),
    body('description')
        .optional()
        .isString()
        .withMessage('Description should be string'),
];
const validateEditAlbum = [
    body('title').optional().isString().withMessage('Title is required'),
    body('description')
        .optional()
        .isString()
        .withMessage('Description should be string'),
];
const validateAlbumParam = [

    param('albumId').isMongoId().withMessage('albumId is required'),
];




const validateSearchKeywordParam = [
    param('searchKeyword').isString().withMessage('searchKeyword is required')
]



const validateAlbumId = [
    body('albumId').isMongoId().withMessage('albumId is required'),
];

const validateEditPhoto = [
    body('title').isString().withMessage('title is required'),
    body('description').isString().withMessage('description is required'),
    body('isPublic').isBoolean().withMessage('isPublic is required'),
    body('allowCommenting').isBoolean().withMessage('allowCommenting is required'),
];


module.exports = {
    validateRequest,
    validatePhotoId,
    validateSignUp,
    validateLogIn,
    validatePhotoIdParam,
    validateAlbumParam,
    validatePhotoUpload,
    validateUserIdParam,
    validateUserIdBody,
    validateChangePassword,
    validateUserEmailBody,
    validateCreateAlbum,
    validateAlbumId,
    validateRegisterWithFacebook,
    validateTag,
    validateTagParam,
    validateEditInfo,
    validateComment,
    validateCommentId,
    validateShowCaseDescription,
    validateSearchKeywordParam,
    validateEditAlbum,
    validateEditPhoto,

};
