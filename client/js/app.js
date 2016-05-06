angular
  .module('app', [
    'lbServices',
    'ui.router'
  ])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider,
      $urlRouterProvider) {
    $stateProvider
      .state('todo', {
        url: '',
        templateUrl: 'views/javaBook.html',
        controller: 'TodoController'
      });

    $urlRouterProvider.otherwise('javaBook');
  }]);
