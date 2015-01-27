(function (app) {

    app.controller("ContactListController", ContactListController)

    ContactListController.$inject = [];

    function ContactListController() {
        var vm = this;
        vm.Contacts = [
            {id: 1, firstName: "Joe", lastName: "Melvin", phone: "801-555-1234"},
            {id: 2, firstName: "Billy", lastName: "Bob", phone: "555-123-4567"},
            {id: 3, firstName: "Shelly", lastName: "Johnson", phone: "555-666-7777"}
        ];
    }

})(window.angular.module("contactsApp"));