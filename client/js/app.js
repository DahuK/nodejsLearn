angular
  .module('app', [
    'ui.router',
    'lbServices'
  ])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider,
      $urlRouterProvider) {
    $stateProvider
      .state('add-book', {
        url: '/add-book',
        templateUrl: 'views/book-form.html',
        controller: 'AddBookController'
      })
      .state('all-books', {
        url: '/all-books',
        templateUrl: 'views/all-books.html',
        controller: 'AllBookController'
      })
      .state('edit-book', {
        url: '/edit-book/:id',
        templateUrl: 'views/book-form.html',
        controller: 'EditBookController'
      })
      .state('delete-book', {
        url: '/delete-book/:id',
        controller: 'DeleteBookController',
      });
    $urlRouterProvider.otherwise('all-books');
  }]);
