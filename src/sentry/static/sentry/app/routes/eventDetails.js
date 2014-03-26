define(['app'], function() {
    'use strict';

    return {
        parent: 'group',
        url: 'event/:event_id/',
        templateUrl: 'partials/event-details.html',
        controller: function($scope, selectedEvent){
            $scope.$parent.selectedEvent = selectedEvent;

            $scope.transactionEventList = [{
                type: 'http_request',
                method: 'GET',
                url: 'http://example.com/foo/bar'
            }, {
                message: 'Hello world!'
            }, {
                type: 'exception'
            }];

        },
        resolve: {
            selectedEvent: function($http, $stateParams) {
                return $http.get('/api/0/groups/' + $stateParams.group_id + '/events/' + $stateParams.event_id + '/').then(function(response){
                    return response.data;
                });
            }
        }
    };
});
