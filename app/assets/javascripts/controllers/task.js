function newTaskCtrl($scope, $http) {

    $scope.submitFrom = function() {
	$http.post('tasks', $scope.newtask).
        success(function( ) {
		alert("hi");
            }).
	error( function( data ){
		alert("Error");
            });
    };
}
newTaskCtrl.$inject = ["$scope", "$http"];

function newsubTaskCtrl($scope, $http) {

    $scope.submitFrom = function() {
	//alert("swapnil");
	$scope.newtask.master_task_id = $scope.task.id;
       	$http.post('tasks', $scope.newtask).
        success(function( ) {
		$scope.fetchsubTasks();
		$scope.show_subtask = true;
	    });
	
    };
}
newTaskCtrl.$inject = ["$scope", "$http"];


function tasksCtrl($scope, $http) {
    $scope.tasks = [];
    $scope.subtasks = [];
    $scope.show_tasks = false;
    $scope.edit_tasks = false;
    $scope.show_subtask = true;
    
    $scope.fetchTasks = function() {
	$http.get('tasks').
        success(function( taskss ) {
                $scope.tasks = taskss;
            });
    };
    
    $scope.fetchsubTasks = function() {
	$http.get('subtasks?task_id='+$scope.task.id).
        success(function( subtaskss ) {
                $scope.subtasks = subtaskss;
            });
    };
    
    //    $scope.submitFrom = function() {
    //	alert("Edit From Submit");
    //};
}
tasksCtrl.$inject = ["$scope", "$http"];