// create angular module
const appModule = angular.module('app', ['ngRoute']);

// set up routes
appModule.config(($routeProvider) => {
  $routeProvider
    .when('/about', {
      templateUrl: 'html/about.html'
    })
    .when('/', {
      templateUrl: 'html/home.html',
      controller: 'appController'
    })
    .when('/help', {
      templateUrl: 'html/help.html'
    })
    .otherwise({
      templateUrl: 'html/home.html'
    });
});

// set up controller
appModule.controller('appController', ['$scope', ($scope) => {
  $scope.options = [
    'hasVowels',
    'toUpper',
    'toLower',
    'ucFirst',
    'isQuestion',
    'words',
    'wordCount',
    'toCurrency',
    'fromCurrency',
    'inverseCase',
    'getMiddle',
    'numberWords',
    'alternatingCase',
    'isDigit',
    'doubleCheck'
  ];

  $scope.testUserInput = (userInput) => {
    if ($scope.selectedOption) {
      try {
        $scope.testResult = userInput ?
          userInput[$scope.selectedOption]() :
          ''[$scope.selectedOption]();
      } catch (error) {
        $scope.testResult = error.message;
      }
    } else {
      $scope.testResult = 'Please Select an Option for your test';
    }
  };
}]);
