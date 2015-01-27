(function (app) {

    app.config(Config);

    Config.$inject = ["$routeProvider"];

    function Config($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "/app/contacts/list-contacts.html",
                controller: "ContactListController",
                controllerAs: "vm"
            })
            .when("/create", {
                templateUrl: "/app/contacts/create-contact.html",
                controller: "CreateContactController",
                controllerAs: "vm"
            })
            .otherwise({redirectTo: "/"});
    }
})(window.angular.module("contactsApp"));
