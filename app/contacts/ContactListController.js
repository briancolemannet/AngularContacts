(function (app) {

    app.controller("ContactListController", ContactListController);

    ContactListController.$inject = ["ContactsService"];

    function ContactListController(contactsService) {
        var vm = this;
        vm.Contacts = [];
        init();

        function init() {
            contactsService.GetContacts().then(function (data) {
                vm.Contacts = data;
            });
        }
    }
})(window.angular.module("contactsApp"));