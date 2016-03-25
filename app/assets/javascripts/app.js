angular.module('flapperNews', ['ui.router', 'templates'])
  .config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider){
      $stateProvider
        .state('home', {
          url: '/home',
          templateUrl: 'home/_home.html',
          controller: 'MainCtrl',
          // resolve: {
          //   postPromise: ['posts', function(posts){
          //     return posts.getAll();
          //   }]
          // }
          resolve: {
            postPromise: function($http){
              // $http returns a promise for the url data
              return $http({method: 'GET', url: '/posts.json'});
            }
          }
        })
        .state('posts', {
          url: '/posts/:id',
          templateUrl: 'posts/_posts.html',
          controller: 'PostsCtrl'
        });
      $urlRouterProvider.otherwise('home');
  }])