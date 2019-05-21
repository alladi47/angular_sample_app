let myapp = angular.module("Myapp",[]);

let mycontroller = function($scope){

    $scope.message="hello world";
}

myapp.controller("MyController",mycontroller);



let JSONController = function($scope){

    let Student = {
        FirstName: "Anurag",
        LastName: "Alladi",
        Email:"alladi.anurag47@gmail.com"
    }
    $scope.Student=Student;
}
myapp.controller("Student",JSONController);