(function() {
  angular.module('api', []).
    constant('APIConfig', {
      PREFIX: '/api/v1/'
    }).

    service('API', [
      '$http', 'APIConfig', function($http, APIConfig) {

        function get(resource, params) {
          var url = APIConfig.PREFIX + resource;
          if (params && params.id) {
            url += '/' + params.id;
          }

          return $http.get(url, params);
        }

        function del(resource, id, params) {
          var url = APIConfig.PREFIX + resource + '/' + id;

          return $http.delete(url);
        }

        return {
          get:    get,
          delete: del
        };
      }
    ]);
})();
