(function () {
    var myApp = angular.module("myApp", ['ngRoute']);

    myApp.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/Person', {
            templateUrl: '/App_Frond/Person/Show.html',
            controller:'showCtrl'
        }).otherwise({redirectTo: '/Person'});
    }]);
    myApp.controller('showCtrl', ['$scope', '$http', function ($scope, $http) {
        $http.get('/Person/GetPerson').then(function (data) {
            $scope.item = data;
            console.log($scope.item.data);
        });

        $scope.getJavascript = function () {
            console.log("enter the getJavscript function");
            $http.get('/Person/GetJavaScript').then(function (data) {
                $scope.myJS = data;
                console.log($scope.myJS.data);
                var run = new Function ($scope.myJS.data);
                run();
            });
        }


        $scope.setSession = function () {
            console.log("enter the set session function");
            $http.get('/Person/SetSession').then(function (data) {
                $scope.myJS = data;
                console.log($scope.myJS);
            });
        }


        $scope.getSession = function () {
            console.log("enter the get session function");
            $http.get('/Person/GetSession').then(function (data) {
                $scope.myJS = data;
                alert($scope.myJS.data);
            });
        }
    }])

})();