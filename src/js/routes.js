angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('doGood', {
    url: '/page1',
    templateUrl: 'templates/doGood.html',
    controller: 'doGoodCtrl'
  })

  .state('signup', {
    url: '/page4',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('login', {
    url: '/page5',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('getStarted', {
    url: '/page6',
    templateUrl: 'templates/getStarted.html',
    controller: 'getStartedCtrl'
  })

  .state('volunteer', {
    url: '/page7',
    templateUrl: 'templates/volunteer.html',
    controller: 'volunteerCtrl'
  })

  .state('donate', {
    url: '/page11',
    templateUrl: 'templates/donate.html',
    controller: 'donateCtrl'
  })

  .state('animalWelfare', {
    url: '/page9',
    templateUrl: 'templates/animalWelfare.html',
    controller: 'animalWelfareCtrl'
  })

  .state('healthNutrition', {
    url: '/page17',
    templateUrl: 'templates/healthNutrition.html',
    controller: 'healthNutritionCtrl'
  })

  .state('religion', {
    url: '/page18',
    templateUrl: 'templates/religion.html',
    controller: 'religionCtrl'
  })

  .state('animalWelfare2', {
    url: '/page12',
    templateUrl: 'templates/animalWelfare2.html',
    controller: 'animalWelfare2Ctrl'
  })

  .state('evanstonAnimalShelter', {
    url: '/page10',
    templateUrl: 'templates/evanstonAnimalShelter.html',
    controller: 'evanstonAnimalShelterCtrl'
  })

  .state('cARE', {
    url: '/page13',
    templateUrl: 'templates/cARE.html',
    controller: 'cARECtrl'
  })

  .state('heartlandAnimalShelter', {
    url: '/page16',
    templateUrl: 'templates/heartlandAnimalShelter.html',
    controller: 'heartlandAnimalShelterCtrl'
  })

  .state('aCSociety', {
    url: '/page15',
    templateUrl: 'templates/aCSociety.html',
    controller: 'aCSocietyCtrl'
  })

  .state('americanRedCross', {
    url: '/page20',
    templateUrl: 'templates/americanRedCross.html',
    controller: 'americanRedCrossCtrl'
  })

  .state('bahaI', {
    url: '/page23',
    templateUrl: 'templates/bahaI.html',
    controller: 'bahaICtrl'
  })

  .state('iSKCON', {
    url: '/page24',
    templateUrl: 'templates/iSKCON.html',
    controller: 'iSKCONCtrl'
  })

  .state('salvationArmy', {
    url: '/page22',
    templateUrl: 'templates/salvationArmy.html',
    controller: 'salvationArmyCtrl'
  })

  .state('aIDSChicago', {
    url: '/page21',
    templateUrl: 'templates/aIDSChicago.html',
    controller: 'aIDSChicagoCtrl'
  })

  .state('evanstonAnimalShelter2', {
    url: '/page19',
    templateUrl: 'templates/evanstonAnimalShelter2.html',
    controller: 'evanstonAnimalShelter2Ctrl'
  })

  .state('success', {
    url: '/page14',
    templateUrl: 'templates/success.html',
    controller: 'successCtrl'
  })

  .state('login2', {
    url: '/page25',
    templateUrl: 'templates/login2.html',
    controller: 'login2Ctrl'
  })

$urlRouterProvider.otherwise('/page1')

  

});