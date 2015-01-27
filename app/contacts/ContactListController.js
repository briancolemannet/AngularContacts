(function (app) {

    app.controller("ContactListController", ContactListController);

    ContactListController.$inject = ["ContactsService"];

    function ContactListController(contactsService) {
        var vm = this;
        vm.Contacts = [];
        init();

        function init(){
            vm.Contacts = contactsService.GetContacts();
        }
    }
})(window.angular.module("contactsApp"));