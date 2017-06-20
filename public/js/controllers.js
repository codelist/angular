angular.module('CodeListApp').controller('AppCtrl', function ($scope, $timeout, $mdSidenav, $log) {
  $scope.toggleLeft = buildDelayedToggler('left');


  // $scope.toggleRight = buildToggler('right');
  // $scope.isOpenRight = function(){
  //   return $mdSidenav('right').isOpen();
  // };

  /**
   * Supplies a function that will continue to operate until the
   * time is up.
   */
  function debounce(func, wait, context) {
    var timer;

    return function debounced() {
      var context = $scope,
          args = Array.prototype.slice.call(arguments);
      $timeout.cancel(timer);
      timer = $timeout(function() {
        timer = undefined;
        func.apply(context, args);
      }, wait || 10);
    };
  }

  /**
   * Build handler to open/close a SideNav; when animation finishes
   * report completion in console
   */
  function buildDelayedToggler(navID) {
    return debounce(function() {
      // Component lookup should always be available since we are not using `ng-if`
      $mdSidenav(navID)
        .toggle()
        .then(function () {
          $log.debug("toggle " + navID + " is done");
        });
    }, 200);
  }

  function logout(){
    alert("logout");
  }

  function buildToggler(navID) {
    return function() {
      // Component lookup should always be available since we are not using `ng-if`
      $mdSidenav(navID)
        .toggle()
        .then(function () {
          $log.debug("toggle " + navID + " is done");
        });
    };
  }
});

angular.module('CodeListApp').controller('LeftCtrl', function ($scope, $timeout, $mdSidenav, $log) {
  $scope.close = function () {
    // Component lookup should always be available since we are not using `ng-if`
    $mdSidenav('left').close()
      .then(function () {
        $log.debug("close LEFT is done");
      });

  };
});

angular.module('CodeListApp').controller('userListCtrl',function($scope) {
  $scope.close = function () {
    // Component lookup should always be available since we are not using `ng-if`
    $mdSidenav('left').close()
      .then(function () {
        $log.debug("close LEFT is done");
      });
  };
});

angular.module('CodeListApp').controller('myCtrl', function($scope, $http){
  $http.get("data/data.htm")
    .then(function(res){
        $scope.myWelcome = res.data;
  });
});

    // app.controller('menuCntl', function($scope){
    //
    //         $scope.menuList = [
    //           {name:'Jani',country:'Norway'},
    //           {name:'Hege',country:'Sweden'},
    //           {name:'Kai',country:'Denmark'}
    //         ]
    // });

angular.module('CodeListApp').controller('menuCntl', function($scope, $http){
  $http.get("data/menu.do")
    .then(function(res){
      $scope.menuList = res.data.records;
    });
});

angular.module('CodeListApp').controller("Page2Controller", function($routeParams){
  var page1Ctrl = this;
  page1Ctrl.msg = "Page2 Controller Property";
  page1Ctrl.param = $routeParams['param'];
});
