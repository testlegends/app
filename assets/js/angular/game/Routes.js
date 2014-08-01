/**
* GameRoutes
*
* @author      :: Jeff Lee
* @created     :: 2014/04/24
*/

define(['angular', 'angularRoute'], function(angular) {
	'use strict';

	return angular.module('Game.routes', ['ngRoute'])

		.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
			$routeProvider.when('/game/:id', {
				templateUrl: '/js/angular/game/partials/index.html',
				controller: 'GameController'
			});

			$routeProvider.otherwise({ redirectTo: function () {
				window.location.href = 'http://build.testlegends.com';
			} });

			$locationProvider.html5Mode(true);
		}]);
});
