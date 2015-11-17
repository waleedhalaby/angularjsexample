var revoPortal = angular.module('revoPortal', [
  'ngRoute',
  'slideController',
  'slideServices'
]);

revoPortal.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/slides', {
        templateUrl: 'partials/slideList.html',
        controller: 'slideListCtrl'
      }).
      when('/slides/:slideId', {
        templateUrl: 'partials/slideDetails.html',
        controller: 'slideDetailCtrl'
      }).
      otherwise({
        redirectTo: '/slides'
      });
  }]);