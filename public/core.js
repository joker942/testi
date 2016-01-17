function main($scope, $http) {
    // when landing on the page, get all todos and show them
  
    $scope.adduser = function () {
        $http.post('/api/users', $scope.user)
            .success(function (response) {
                $scope.user = '';

            })
        .error(function (response) {
            console.log(response);
        });


    }
}
 