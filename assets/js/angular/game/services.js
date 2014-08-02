/**
 * GameServices
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/07/10
 */

define(['angular', 'easeljs', 'game/elements', 'game/constants', 'game/states', 'game/sprites', 'common/services'], function (angular) {

    return angular.module('Game.services', ['Game.elements', 'Game.constants', 'Game.states', 'Game.sprites', 'Common.services']);

});
