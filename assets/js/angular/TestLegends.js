/**
* TestLegends
*
* @author      :: Jeff Lee
* @created     :: 2014/07/30
*/

require.config({
    paths: {
        angular: '../vendor/angular/angular',
        angularRoute: '../vendor/angular-route/angular-route',
        angularCookies: '../vendor/angular-cookies/angular-cookies',
        angularLoadingBar: '../vendor/angular-loading-bar/build/loading-bar',

        underscore: '../vendor/underscore/underscore',

        easeljs: '../vendor/easeljs/lib/easeljs-0.7.1.combined',
        tweenjs: '../vendor/TweenJS/lib/tweenjs-0.5.1.combined',
        preloadjs: '../vendor/PreloadJS/lib/preloadjs-0.4.1.combined',
        //soundjs: '../vendor/SoundJS/lib/soundjs-0.5.2.combined'
    },
    shim: {
        angular: { exports: 'angular' },
        angularRoute: ['angular'],
        angularLoadingBar: ['angular'],

        easel: { exports: 'createjs' },
        tween: ['easel']
    },
    priority: ['angular']
});

require([
    'angular',
    'game/app'
], function (angular, gameApp) {
    'use strict';

    angular.element(document).ready(function () {
        angular.bootstrap(document, [gameApp.name]);
    });
});
