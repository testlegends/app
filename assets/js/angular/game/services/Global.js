/**
 * GameService
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/07/10
 */

define([
    'game/services',
    'common/services/TestLegendsAPI'
], function (gameServices) {
    'use strict';

    return gameServices

        .factory('Global', ['$routeParams', 'TestLegendsAPI', function ($routeParams, TestLegendsAPI) {
            return {
                game: {
                    assets: {},
                    monster_list: [],
                    scale_idx: 1
                },
                stage: {},
                canvas: null,

                //TODO: Should put this in Question Service, but hard to solve the async problem
                getGameData: function (cb) {
                    TestLegendsAPI
                        .get('/questions?gameId=' + $routeParams.id)
                        .success(function (response) {
                            if (response.status === 'OK') {
                                cb(null, response.data.map(function (question) {
                                    var allOptions = [question.options.correct];

                                    question.options.wrong.forEach(function (option) {
                                        allOptions.push(option.text);
                                    });

                                    return {
                                        Question: question.content,
                                        Answer: question.options.correct,
                                        Options: allOptions
                                    };
                                }));
                            } else {
                                cb('Error getting questions');
                            }
                        });
                }
            };
        }]);
});
