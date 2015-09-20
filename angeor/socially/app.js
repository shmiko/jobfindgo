if (Meteor.isClient) {
  angular.module('socially',['angular-meteor']);
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
