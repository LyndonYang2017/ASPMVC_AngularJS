angular.
    module('myLogin').
    factory('myModelLogin', function() {
        var service = {};

        service.ID = "";
        service.iPadName = "";
        service.password = "";
        service.stationName = "";            
        

        return service;
    });