angular
  .module('app', ['ngTable', 'ngTableResizableColumns'])
  .controller('AllBookController', ['$scope', 'JavaBook', function($scope, JavaBook) {
	  $scope.data = JavaBook.find();
      $scope.tableParams = new NgTableParams({
          page: 1,            // show first page
          count: 10           // count per page
      }, {
          total: data.length, // length of data
          getData: function ($defer, params) {
              // use built-in angular filter
              var filteredData = params.filter() ?
                      $filter('filter')(data, params.filter()) :
                      data;
              var orderedData = params.sorting() ?
                      $filter('orderBy')(filteredData, params.orderBy()) :
                      data;

              params.total(orderedData.length); // set total for recalc pagination
              $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
          }
      });
  }])
  .controller('AddBookController', ['$scope', 'JavaBook',
      '$state', function($scope, $state) {
    $scope.action = 'Add';
    $scope.book;
    $scope.isDisabled = false;

    JavaBook
      .find()
      .$promise
      .then(function(book) {
        $scope.book = book;
      });

    $scope.submitForm = function() {
    	JavaBook
        .create({
          name: $scope.book.name,
          price: $scope.book.price,
          author: $scope.book.author,
          publisher: $scope.book.publisher,
          shop: $scope.book.shop,
          commit: $scope.book.commit,
          rating: $scope.book.rating
        })
        .$promise
        .then(function() {
          $state.go('all-books');
        });
    };
  }])
  .controller('DeleteBookController', ['$scope', 'JavaBook', '$state',
      '$stateParams', function($scope, Review, $state, $stateParams) {
	  JavaBook
      .deleteById({ id: $stateParams.id })
      .$promise
      .then(function() {
        $state.go('all-books');
      });
  }])
  .controller('EditBookController', ['$scope', '$q', 'JavaBook',
      '$stateParams', '$state', function($scope, $q, JavaBook,
      $stateParams, $state) {
    $scope.action = 'Edit';
    $scope.book;
    $scope.isDisabled = true;

    $q
      .all([
        JavaBook.find().$promise,
        JavaBook.findById({ id: $stateParams.id }).$promise
      ])
      .then(function(data) {
        $scope.book = data;
      });

    $scope.submitForm = function() {
      $scope.book
        .$save()
        .then(function(book) {
          $state.go('all-books');
        });
    };
  }])
