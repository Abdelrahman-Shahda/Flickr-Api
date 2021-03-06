const express = require('express');
const router = new express.Router();
const userController = require('../controllers/userController');
const {auth , authOptional} = require('../middleware/authentication');

const {
    validateRequest,
    validateUserIdParam,
    validateUserIdBody,
    validatePhotoId,
    validateEditInfo,
    validateShowCaseDescription,
    validateSearchKeywordParam,
} = require('../middleware/requestValidator');
const { validate } = require('../model/userModel');

router.get(
    '/fav/:userId',
    authOptional,
    validateUserIdParam,
    validateRequest,
    userController.getFavorites
);

router.post(
    '/followUser',
    auth,
    validateUserIdBody,
    validateRequest,
    userController.followUser
);

router.post(
    '/unfollowUser',
    auth,
    validateUserIdBody,
    validateRequest,
    userController.unfollowUser
);

router.get(
    '/followers/:userId',
    authOptional,
    validateUserIdParam,
    validateRequest,
    userController.getFollowers
);

router.get(
    '/followings/:userId',
    authOptional,
    validateUserIdParam,
    validateRequest,
    userController.getFollowings
);

router.get(
    '/about/:userId',
    authOptional,
    validateUserIdParam,
    validateRequest,
    userController.getUserAbout
);

router.get(
    '/photostream/:userId',
    validateUserIdParam,
    validateRequest,
    userController.getUserPhotoStream
);

router.get(
    '/search/:searchKeyword',
    authOptional,
    validateSearchKeywordParam,
    validateRequest,
    userController.searchUser
);

router.patch(
    '/editCoverPhoto',
    auth,
    validatePhotoId,
    validateRequest,
    userController.editCoverPhoto
);

router.patch(
    '/editInfo',
    auth,
    validateEditInfo,
    validateRequest,
    userController.editInfo
);

router.patch(
    '/editProfilePhoto',
    auth,
    validatePhotoId,
    validateRequest,
    userController.editProfilePhoto
);
router.get(
    '/cameraRoll',
    auth,
    userController.viewCameraRoll
);
router.patch(
    '/:userId',
    auth,
    validateUserIdParam,
    validateShowCaseDescription,
    validateRequest,
    userController.editShowCaseAndDescription
);


router.get(
    '/albums/:userId', 
    validateUserIdParam,
    validateRequest,
    userController.viewUserAlbums
    );
module.exports = router;
