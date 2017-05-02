var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
    console.log("Hello World from controller");
$scope.content = 'first';

var refresh = function(){
       $http.get('/HW5').then(function(response){
         console.log("Got data!");
           $scope.HW5 = response.data;
       });
   };
   refresh();

$scope.addUser = function() {
  console.log($scope.contact);
  $http.post('/HW5', $scope.contact).then(function(response) {
    console.log(response);
    refresh();
  });
};

$scope.remove = function(id) {
  console.log(id);
  $http.delete('/HW5/' + id).then(function(response) {
    refresh();
  });
};

$scope.edit = function(id) {
  console.log(id);
  $http.get('/HW5/' + id).then(function(response) {
    $scope.contact = response.data;
  });
};

$scope.update = function() {
  console.log($scope.contact._id);
  $http.put('/HW5/' + $scope.contact._id, $scope.contact).then(function(response) {
    refresh();
  })
};


$scope.complete = function(id) {
  console.log(id);
  $http.get('/HW5/' + id).then(function(response) {

    response.data.statusProperty = "complete";
    $scope.contact = response.data;

    console.log(response);

    $scope.update();
  })
};


//junior
$scope.deselect = function() {
  $scope.contact = "";
}

}]);﻿

