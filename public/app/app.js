angular.module('app', ['ngResource']);

angular.module('app').controller('testCtrl', function($scope, $resource){
   $scope.jobs = $resource('/api/jobs').query();
   //[{
       //title: 'Sales Person',
       //description: 'You will fight dragons'
   //},{
   //     title: 'Accountant',
   //     description: 'you will use the keyboard'
   //}];

});