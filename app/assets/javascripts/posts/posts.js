angular.module('flapperNews')
  .factory('posts', [
  '$http',
  function($http){
    getAll = function() {
      return $http.get('/posts.json').success(function(data){
        angular.copy(data, o.posts);
      });
    };
    return 'wew';
  }]);
  // function(){
  //   var o = {
  //     posts: [
  //       {title: 'post 1', upvotes: 5, comments: [] },
  //       {title: 'post 2', upvotes: 2, comments: []},
  //       {title: 'post 3', upvotes: 15, comments: []},
  //       {title: 'post 4', upvotes: 9, comments: []},
  //       {title: 'post 5', upvotes: 4, comments: []}
  //     ]
  //   }
  //   return o;
  // }])