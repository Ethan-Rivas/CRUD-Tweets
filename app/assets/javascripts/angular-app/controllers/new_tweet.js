(function() {
  angular.module('tweets').
    controller('NewTweetsController', function($scope, $window) {

        $scope.tweet = {};

        $scope.redirect = function() {
          $window.location.reload(true);
        };
      });

})();
