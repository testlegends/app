/**
 * GameController
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/04/24
 */

define([
	'angular',
    'game/services/Global',
    'game/services/Main',
    'game/constants/GameStates'
], function (angular) {
	'use strict';

	return angular.module('Game.controllers', ['Game.services', 'Game.constants'])

		.controller('GameController', ['$scope', 'Global', 'Main', 'GameStates', function ($scope, Global, Main, GameStates) {

			$scope.name = "GameController";

			$scope.init = function () {
				Global.canvas = document.getElementById('EpicGame');
				Global.getGameData(function (err, data) {
					Global.game.questions = data;
					Global.game.Main = new Main();
				});
			};

			$scope.restart = function () {
				Global.game.timer.timer_activate_flag = 0;
				clearInterval(Global.game.timer.interval_holder);

				Global.game.main.removeChild(Global.game.hero_obj);
				for (var i = 0; i < Global.game.monster_list.length; i++) {
					Global.game.main.removeChild(Global.game.monster_list[i]);
				}

				Global.game.Main.changeState(GameStates.LOSE);
				Global.game.Main.changeState(GameStates.START);
			};

			$scope.init();
		}]);
});
