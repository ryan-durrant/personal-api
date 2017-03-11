var app = angular.module('app', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('home', {
        url:'/',
        templateUrl: "views/home.html",
        controller: "controller"
      })
      .state('me', {
        url:'/me',
        templateUrl: "views/me.html",
        controller: "controller"
      })
      .state('skills', {
        url:'/skills',
        templateUrl: "views/skills.html",
        controller: "controller"
      });

      $urlRouterProvider
          .otherwise('/');
  });
