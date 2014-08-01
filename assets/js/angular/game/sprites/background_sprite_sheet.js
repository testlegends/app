/**
 * BackgroundSprite
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/07/10
 */

define([
    'game/sprites',
    'game/services/Global',
    'easeljs'
], function (gameSprites) {
    'use strict';

    return gameSprites

        .factory('BackgroundSprite', ['Global', function (Global) {
            var data = {
                "images": ["/sprites/background_sprite_sheet.png"],
                "frames": [
                    [2, 2566, 2272, 1280],
                    [2, 1284, 2272, 1280],
                    [2, 2, 2272, 1280]
                ],
                "animations": {
                    background_official: [0],
                    mockup_hit: [1],
                    mockup_trajectory: [2]
                }
            };

            Global.game.assets.backgroundSpriteSheet = new createjs.SpriteSheet(data);

            return data;
        }]);
});
