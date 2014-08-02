/**
 * QuestionsService
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/07/12
 */

define(['game/services', 'game/services/Global'], function (gameServices) {
    'use strict';

    return gameServices

        .factory('Questions', ['Global', function (Global) {
            function Questions () {
                this.getList = function () {
                    this.data = Global.game.questions;
                    return this.data;
                };
            }

            return Questions;
        }]);
});
