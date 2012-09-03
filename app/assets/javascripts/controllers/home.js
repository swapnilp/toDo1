function homeCtrl($scope, $location) {
    $scope.change= function() {
	$location.path("edit_task?id=1");
    };
}
homeCtrl.$inject = ["$scope", "$location"];
