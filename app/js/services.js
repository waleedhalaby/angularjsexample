var slideServices = angular.module('slideServices', ['ngResource']);

slideServices.factory('Slide', ['$resource',
  function($resource){
    return $resource('slides/:slideId.json', {}, {
      query: {method:'GET', params:{slideId:'slides'},isArray:true}
    });
  }]);