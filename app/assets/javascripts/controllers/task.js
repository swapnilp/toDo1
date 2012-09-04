function newTaskCtrl($scope, $http, $location) {

    $scope.dateOptions = {format: 'yyyy/mm/dd'};

    $scope.submitFrom = function() {
	$http.post('tasks', $scope.newtask).
        success(function() {
		$scope.myTaskshome();
		//alert("Success");
            }).
	error( function( data ){
		alert("Error");
            });
    };
}
newTaskCtrl.$inject = ["$scope", "$http", "$location"];

function newsubTaskCtrl($scope, $http) {
    $scope.dateOptions = {format: 'yyyy/mm/dd'};

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


function tasksCtrl($scope, $http, $location) {
    $scope.tasks = [];
    $scope.subtasks = [];
    $scope.show_tasks = false;
    $scope.edit_tasks = false;
    $scope.show_subtask = true;
    $scope.mytasks = true;

    
    $scope.fetchTasks = function() {
	$http.get('tasks').
        success(function( taskss ) {
                $scope.tasks = taskss;
            });
    };

    $scope.removeTask = function(task_id, type) {
	$http.delete('tasks/'+task_id).
        success(function() {
		//$scope.fetchsubTasks();
		if (type == 'task') {
		    $scope.fetchTasks();
		} else {
		    $scope.fetchsubTasks();
		}
            });
    };
    
    $scope.fetchsubTasks = function() {
	$http.get('subtasks?task_id='+$scope.task.id).
        success(function( subtaskss ) {
                $scope.subtasks = subtaskss;
            });
    };
    
    $scope.myTaskshome = function() {
    	$location.path("my_tasks");
    	$scope.mytasks = true;
    };

    //    $scope.submitFrom = function() {
    //	alert("Edit From Submit");
    //};
}
tasksCtrl.$inject = ["$scope", "$http", "$location"];