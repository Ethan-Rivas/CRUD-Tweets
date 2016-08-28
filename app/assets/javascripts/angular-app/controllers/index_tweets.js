(function() {
  angular.module('tweets').
    controller('IndexTweetsController', function ($scope, API, $window) {

        API.get('tweets').then(function(response) {
          $scope.tweets = response.data;
        });

        $scope.delete = function(tweet) {
          if(confirm("Are you sure you want to delete this Tweet?")) {
            if (!tweet.removing) {
              tweet.removing = true;
            }

            API.delete('tweets', tweet.id).then(function(response) {
              var index = $scope.tweets.indexOf(tweet);
              $scope.tweets.splice(index, 1);
            });
          }
        };
      });
})();
