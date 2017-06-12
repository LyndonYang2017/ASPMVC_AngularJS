(function () {
    var myApp = angular.module("myApp", ['ngRoute']);

    myApp.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/Person', {
            templateUrl: 'App_Frond/Person/Show.html',
            controller:'showCtrl'
        }).otherwise({redirectTo: '/Person'});
    }]);
    myApp.controller('showCtrl', ['$scope', '$http', function ($scope, $http) {
        //$http.get('/Person/GetPerson').then(function (data) {
        $http.get('api/UserInfo').then(function (data) { 
            $scope.item = data;
            console.log($scope.item.data);
        });

        $scope.getJavascript = function () {
            console.log("enter the getJavscript function");
            $http.get('Person/GetJavaScript').then(function (data) {
                $scope.myJS = data;
                console.log($scope.myJS.data);
                var run = new Function ($scope.myJS.data);
                run();
            });
        }


        $scope.setSession = function () {
            console.log("enter the set session function");
            $http.get('Person/SetSession').then(function (data) {
                $scope.myJS = data;
                console.log($scope.myJS);
            });
        }


        $scope.getSession = function () {
            console.log("enter the get session function");
            $http.get('Person/GetSession').then(function (data) {
                $scope.mySession = data;
                alert($scope.mySession.data);
            });
        }


        $scope.getApplicationNumber = function () {
            console.log("enter the get application number function");
            $http.get('Person/GetApplicationNumber').then(function (data) {
                $scope.myApplicationNumber = data;
                alert($scope.myApplicationNumber.data);
            });
        }

        $scope.getSessionNumber = function () {
            console.log("enter the get session number function");
            $http.get('Person/GetSessionNumber').then(function (data) {
                $scope.mySessionNumber = data;
                alert($scope.mySessionNumber.data);
            });
        }

        //alertMyName();
    }])

})();