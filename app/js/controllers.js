var slideController = angular.module('slideController',[]);

slideController.controller('slideListCtrl',['$scope','$http',
	function($scope,$http){
	$http.get('slides/slides.json').success(function(data){
		$scope.slides = data;
	});
}]);

slideController.controller('slideDetailCtrl',['$scope','$routeParams', 'Slide',
	function($scope,$routeParams,Slide){
		$scope.slide = Slide.get({slideId: $routeParams.slideId}, function(slide){
			$scope.mainPhotoUrl = slide.photos[0];
		});
		$scope.setPhoto = function(photoUrl) {
      		$scope.mainPhotoUrl = photoUrl;
    };
}]);