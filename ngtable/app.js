// app.js
var app =angular.module('sortApp', [])

app.controller('mainController', function($scope,$http) {
  $scope.sortType     = 'Name'; // set the default sort type
  $scope.sortReverse  = false;  // set the default sort order
  $scope.searchFish   = '';     // set the default search/filter term
  
  // create the list of sushi rolls 

$http.get('http://www.w3schools.com/angular/customers.php').then(function(response) {
        $scope.sushi = response.data.records;
    });
});
