angular.module('flapperNews')
  .controller('MainCtrl', [
    '$scope',
    'posts',
    'postPromise',
    function($scope, posts, postPromise){
      $scope.posts = postPromise.data;
      $scope.addPost = function() {
        if (!$scope.title || $scope.title === '') {
          alert('Please enter a title'); return
        }
      $scope.posts.push({
        title: $scope.title,
        link: $scope.link,
        upvotes: 0, 
          comments: [
            {author: 'Joe', body: 'Cool post!', upvotes: 0},
            {author: 'Bob', body: 'Great idea but everything is wrong!', upvotes: 0}
          ]
      });
      $scope.title = '';
      $scope.link = '';
      };
      $scope.incrementUpvotes = function(post){
        post.upvotes += 1;
      };
  }])