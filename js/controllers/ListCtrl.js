//TODO

MapSearchApp.controllers.controller("ListCtrl", [
    "$scope",
    "pubSubSrv",
    function ($scope, pubSubSrv) {

        pubSubSrv.subscribe('realEstates:load', function (data) {
            $scope.realEstates = data;
        });

        $scope.highlight = function (el) {
            if ($scope.selected && $scope.selected !== el) {
                $scope.selected.highlighted = '';
            }else{
                $scope.selected = null;
            }

            if (el.highlighted)
                el.highlighted = '';
            else {
                el.highlighted = 'highlighted';
                $scope.selected = el;
            }
            console.log('highlight', arguments)
        };
    }
]);