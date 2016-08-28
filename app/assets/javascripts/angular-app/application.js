var tweets = angular.module('tweets', ['cjForm', 'api']);

tweets.controller('TestController', function($scope) {
  $scope.message = "Tweets App."; // App Name
});
