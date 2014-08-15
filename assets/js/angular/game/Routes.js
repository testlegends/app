/**
* GameRoutes
*
* @author      :: Jeff Lee
* @created     :: 2014/04/24
*/

define(['angular', 'angularRoute', 'common/services/TestLegendsURL'], function(angular) {
	'use strict';

	return angular.module('Game.routes', ['ngRoute', 'Common.services'])

		.config(['$routeProvider', '$locationProvider', 'TestLegendsURL', function($routeProvider, $locationProvider, TestLegendsURL) {
			$routeProvider.when('/game/:id', {
				templateUrl: '/js/angular/game/partials/index.html',
				controller: 'GameController'
			});

			$routeProvider.otherwise({ redirectTo: function () {
				window.location.href = TestLegendsURL.build;
			} });

			$locationProvider.html5Mode(true);
		}]);
});
