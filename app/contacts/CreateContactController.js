(function (app) {

    app.controller("CreateContactController", CreateContactController);

    CreateContactController.$inject = ["ContactsService"];

    function CreateContactController(contactsService) {
        var vm = this;
        vm.NewContact = {};
        init();

        function init() {
            vm.NewContact.firstName = "Joe";
            vm.NewContact.lastName = "Shmoe";
            vm.NewContact.phone = "111-555-9999";
        }
    }
})(window.angular.module("contactsApp"));