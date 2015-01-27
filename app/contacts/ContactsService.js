(function (app) {

    app.factory("ContactsService", ContactsService)

    ContactsService.$inject = ["$http", "$log"];

    function ContactsService($http, $log) {

        var service = {
            GetContacts: getContacts
        };

        var contacts = [];

        return service;

        function getContacts() {
            return $http.get("/data/contacts.json").then(function (response) {
                contacts = response.data;
                return contacts;
            }, function (error) {
                $log.error(error);
            });
        }
    }

})(window.angular.module("contactsApp"));