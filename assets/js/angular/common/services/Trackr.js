/**
 * TrackrService
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/07/20
 */

define(['common/services'], function (commonServices) {
    'use strict';

    return commonServices

        .factory('Trackr', ['$http', function ($http) {
            var appName = "TestLegends Home";

            var trackr = (function(){
                var url = '/trackr';

                return {
                    save: function (data, cb) {
                        $http.post(url, data).success(cb);
                    }
                }
            })();

            function questionAnswered (answer, correct) {
                answer += correct ? '_true' : '_false';

                var data = {
                    name: appName,
                    info: {
                        event: 'Game',
                        elem: answer
                    }
                };

                trackr.save(data, function (response) {
                    // console.log('logged ' + answer);
                });
            }

            return {
                questionAnswered: questionAnswered
            };
        }]);
});
