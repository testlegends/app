/**
 * HomeController
 *
 * @module      :: Controller
 * @description ::
 * @author      :: Jeff Lee
 * @created     :: 2014/02/08
 */

var request = require('request');

module.exports = (function(){

	function index (req, res) {
		request({
			uri: process.env.TESTLEGENDS_OAUTH_SERVER_URL + '/oauth/token',
			method: 'POST',
			form: {
				grant_type: 'client_credentials',
				client_id: process.env.TESTLEGENDS_API_CLIENT_ID,
				client_secret: process.env.TESTLEGENDS_API_CLIENT_SECRET
			}
		}, function (err, response) {
			if (err) {
				console.log(err);
			}

			var thirtyMinutes = 30 * 60 * 1000;
			res.cookie('app_access_token', JSON.parse(response.body).access_token, { maxAge: thirtyMinutes });

			return res.view();
		});
	}

    function tl_oauth_request (req, res) {

    }

    function tl_oauth_callback (req, res) {
        res.view(_.extend({
            accessToken: req.user.accessToken
        }, helpers));
    }

    function tl_oauth_logout (req, res) {
        req.logout();
        res.redirect('/');
    }

    return {
        index: index,
        tl_oauth_request: tl_oauth_request,
        tl_oauth_callback: tl_oauth_callback,
        tl_oauth_logout: tl_oauth_logout,

        _config: {}
    };

})();
