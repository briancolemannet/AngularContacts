(function (app) {

    app.factory("ContactsService", ContactsService)

    ContactsService.$inject = ["$http", "$log", "$q"];

    function ContactsService($http, $log, $q) {

        var service = {
            GetContacts: getContacts,
            CreateContact: createContact
        };

        var contacts = [];

        return service;

        function getContacts() {

            if (contacts.length === 0) {
                return $http.get("/data/contacts.json").then(function (response) {
                    contacts = response.data;
                    return contacts;
                }, function (error) {
                    $log.error(error);
                });
            }

            var deferred = $q.defer();
            deferred.resolve(contacts);
            return deferred.promise;
        }

        function createContact(newContact) {
            var deferred = $q.defer();
            if (newContact) {
                contacts.push(newContact);
                deferred.resolve(newContact);
            }
            return deferred.promise;
        }
    }

})(window.angular.module("contactsApp"));