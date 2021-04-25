

/**
 *
 * @api {post} /register/loginWithFacebook Login using Facebook
 * @apiName Facebook Login
 * @apiGroup Register
 * @apiVersion  1.0.0
 *
 *
 * @apiParam  {String} loginType  a string containing type of login ex:"Facebook"
 *
 * @apiParamExample  {type} Request-Example:
 * {
 *     "loginType" : "Facebook"
 *     "accessToken": "askdjaksdjaidjskdjak13412jkasjdk.asdasdasd"
 * }
 *
 *
 * @apiSuccessExample {json} Success-Response:
 * {
 *     
 *       status: 'connected', The person is logged into Facebook, and has logged into your webpage.
 *                            not_authorized    The person is logged into Facebook, but has not logged into your webpage.
 *                            unknown   The person is not logged into Facebook, so you don't know if they have logged into your webpage.
 *       authResponse: {
 *       accessToken: '{access-token}',   An access token for the person using the webpage
 *       expiresIn:'{unix-timestamp}',    A UNIX time stamp when the token expires. Once the token expires, the person will need to login again.
 *       reauthorize_required_in:'{seconds-until-token-expires}',   The amount of time before the login expires, in seconds, and the person will need to login again.
 *       signedRequest:'{signed-parameter}',    A signed parameter that contains information about the person using your webpage.
 *       userID:'{user-id}'   The ID of the person using your webpage.
 *      }
 * 
 * }
 * @apiError (400) Bad Request  AccessToken Is Required
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *     
 *          "message": "AccessToken Is Required"
 *        
 *     }
 *
 */
/**
 *
 * @api {post} /register/signUpWithFacebook Sign Up using Facebook
 * @apiName Facebook SignUp
 * @apiGroup Register
 * @apiVersion  1.0.0
 *
 *
 * @apiParam  {String} loginType  a string containing type of login ex:"Facebook"
 *
 * @apiParamExample  {type} Request-Example:
 * {
 *     "loginType" : "Facebook"
 *     "accessToken": "askdjaksdjaidjskdjak13412jkasjdk.asdasdasd"
 * }
 *
 *
 * @apiSuccessExample {json} Success-Response:
 * {
 *     
 *       status: 'connected', The person is logged into Facebook, and has logged into your webpage.
 *                            not_authorized    The person is logged into Facebook, but has not logged into your webpage.
 *                            unknown   The person is not logged into Facebook, so you don't know if they have logged into your webpage.
 *       authResponse: {
 *       accessToken: '{access-token}',   An access token for the person using the webpage
 *       expiresIn:'{unix-timestamp}',    A UNIX time stamp when the token expires. Once the token expires, the person will need to login again.
 *       reauthorize_required_in:'{seconds-until-token-expires}',   The amount of time before the login expires, in seconds, and the person will need to login again.
 *       signedRequest:'{signed-parameter}',    A signed parameter that contains information about the person using your webpage.
 *       userID:'{user-id}'   The ID of the person using your webpage.
 *   }
 * 
 * }
 * @apiError (400) AccessTokenMissing  AccessToken Is Required
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *     
 *          "message": "AccessToken Is Required"
 *        
 *     }
 *
 *
 */

/**
 * @api {post} /register/login Login a User
 * @apiName Login User
 * @apiGroup Register
 * @apiVersion 1.0.0
 * @apiDescription Login into a user account
 * @apiParam {String} email User's email credential
 * @apiParam {String} password Password credential
 * @apiParamExample {json} Request-Example:
 *     {
 *       "email": "AhmedIbrahim@test.com",
 *       "password": "123"
 *     }
 * @apiSuccess {String} accessToken Returning the access-token to the user
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "accessToken": "asdasdkasdliuaslidas"
 *     }
 * @apiError (400) Bad Request  Wrong user credentials
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *          "message": "Invalid Credentials"
 *        
 *     }
 * @apiError (400) EmailMissing Email is required
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *     
 *          "message": "Email is required"
 *        
 *     }
 * @apiError (400) PasswordMissing Password is required
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *     
 *          "message": "Password is required"
 *        
 *     }
 *
 */

 /**
 * @api {post} /register/logOut LogOut a User
 * @apiUse Authentication
 * @apiName Log Out User
 * @apiGroup Register
 * @apiVersion 1.0.0
 * @apiDescription Log Out a user account
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *      
 *     }
 * @apiError (400) Bad Request  Wrong user credentials
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *          "message": "Invalid Credentials"
 *        
 *     }
 * @apiError (400) EmailMissing Email is required
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *     
 *          "message": "Email is required"
 *        
 *     } 
 * @apiError (400) PasswordMissing Password is required
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *     
 *          "message": "Password is required"
 *        
 *     }
 *
 */

/**
 *  @api {post} /register/signUp Sign Up
  * @apiName Sign Up
  * @apiGroup Register
  * @apiVersion 1.0.0
  * @apiDescription Creating a new account.
  * @apiParam {String} email User's Email
  * @apiParam {String} password User's Password
  * @apiParam {String} firstName User's First Name
  * @apiParam {String} lastName User's Last Name
  * @apiParam {Number} age User's Age
  * @apiParamExample {json} Request-Example:
  *{    
  *       "email": "user@email.com",
  *       "firstName": "User",
  *      "lastName": "User",
  *       "age": 18,      
  *     }
 * @apiSuccess {Object} user
 * @apiSuccess {String} user.email User's Email
 * @apiSuccess {String} user.firstName User's First Name
 * @apiSuccess {String} user.lastName User's Last Name
 * @apiSuccess {String} user.accessToken  User's Access Token
 * @apiSuccess {Number} user.age User's Age
 * @apiSuccess {String} user._id User's Id
 * @apiSuccess {Number} user.followers User's Followers
 * @apiSuccess {Number} user.following User's Following
 * @apiSuccessExample {json} Success-Response:
 *    HTTP/1.1 201 OK
 *   {
 *       "_id": "5349b4ddd2781d08c09890f4",
 *       "email": "user@email.com",
 *       "firstName": "User",
 *      "lastName": "User",
 *       "accessToken": "skdnksd7474g3kdbjfhf34",
 *       "age": 18,
 *       "followers": 63,
 *       "following": 55,
 *       
 *     }
 * @apiError (400) UserExists  The Email is already registered
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 400 Failed
 *     {
 *       "error": {
 *          "message": "User Already Exists"
 *        }
 *     }
 * @apiError (400) EmailMissing Email is required
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *     
 *          "message": "Email is required"
 *        
 *     }
 * @apiError (400) PasswordMissing Password is required
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *     
 *          "message": "Password is required"
 *        
 *     }
 
 * @apiError (400) firstNameMissing First Name is required
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *     
 *          "message": "First Name is required"
 *        
 *     }
 * @apiError (400) lastNameMissing Last Name is required
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *     
 *          "message": "Last Name is required"
 *        
 *     }
 
 * @apiError (400) AgeMissing Age  is required
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *     
 *          "message": "Age is required"
 *        
 *     }
 
 */
/**
 * @apiUse Authentication
 * @api {post} /register/changePassword Change Password
 * @apiName Change User's Password
 * @apiGroup Register
 * @apiVersion 1.0.0
 * @apiDescription Change User's Password
 * @apiParam {String} newPass New Password
 * @apiParam {String} oldPass Old Password 
 *  @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       
 *     }
 * @apiParamExample {json} Request-Example:
 * {
 *     "newPass": "5349b4ddd2781d08c09890f4",
 *     "oldPass": "fifa2011"
 * } 
 * @apiError (400) NewPasswordMissing New Password of the account is required
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *     
 *          "message": "New Password is required"
 *        
 *     }
 * @apiError (400) OldPasswordMissing Old Password of the account is required
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *     
 *          "message": "Old Password is required"
 *        
 *     }
 * 
 */

 /**
 * @api {post} /register/forgetPassword Forget Password
 * @apiName Forget Password
 * @apiGroup Register
 * @apiVersion 1.0.0
 * @apiDescription Send User Code to Reset password
 * @apiParam {String} email Email whose password was forgetten
 *  @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       
 *     }
 * @apiParamExample {json} Request-Example:
 * {
 *     "email": "test@test.com"
 * }
 * 
 * @apiError (404) UserNotFound  The id of the User wasn't found
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": {
 *          "message": "User Not Found"
 *        }
 *     }
 * @apiError (400) EmailMissing Email is required
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *     
 *          "message": "Email is required"
 *        
 *     }
 */