(function (app) {

    app.controller("CreateContactController", CreateContactController);

    CreateContactController.$inject = ["$log", "ContactsService"];

    function CreateContactController($log, contactsService) {
        var vm = this;
        vm.CreateContact = createContact;
        init();

        function init() {
            vm.NewContact = getBlankContact();
        }

        function getBlankContact() {
            return {firstName: "", lastName: "", phone: ""};
        }

        function createContact() {
            contactsService.CreateContact(vm.NewContact).then(function () {
                vm.NewContact = getBlankContact();
            }, function (err) {
                $log.error(err);
            });
        }
    }
})(window.angular.module("contactsApp"));