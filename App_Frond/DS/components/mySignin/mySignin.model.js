angular.
    module('mySignin').
    factory('myModelSignin', function() {
        var service = {};

        service.ID = "";
        service.IDNumber = "";
        service.Email = "";
        service.Description = "";       
        
        return service;
    });