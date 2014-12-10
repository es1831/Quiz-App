'use strict';

/**
 * @ngdoc function
 * @name quizApp.controller:UserCtrl
 * @description
 * # UserCtrl
 * Controller of the quizApp
 */
angular.module('quizApp')
  .controller('UserCtrl', function ($scope, $timeout) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

     	$scope.quiz = [
	 		{ 
		 		"q": "Who is the best ping pong player at FSA?", 
		 		'options': [{ 'value': "Mike"} , { 'value': "Eddie"} , {'value' : "Nimit"} , { 'value': "Patrick"}],
		 		'answer': "Nimit", 
		 		'difficulty': '4',
		 		'answered':false 
	 	},
	 		{ 	
		 		"q": "Which robot name was chanted during Lego Mindstorms?", 
			 	'options':[{ 'value': 'infiniteLoop'} , { 'value': 'noHope.js'} , {'value' : 'johnny5'} , { 'value': 'none of the above'}], 
			 	'answer':'noHope.js',
			 	'difficulty': '2',
			 	'answered':false 
		 },
		 	{ 
		 		'q': "Out of the following frontend frameworks, which framework is most rails-like", 
			 	'options':[{ 'value': 'Ember.js'} ,{ 'value': 'Angular.js'} , {'value' : 'Backbone.js'} , { 'value': 'Meteor.js'}], 
			 	'answer':'Ember.js',
			 	'difficulty': '1',
			 	'answered':false 
		 },
		 	{ 
			 	'q': "Which project used a local data store?", 
			 	'options':[{ 'value': 'TripPlanner'} ,{ 'value': 'Twitter.js'} , {'value' : 'WikiWalker'} , { 'value': 'WikiStack'}], 
			 	'answer':'Twitter.js',
			 	'difficulty': '3',
			 	'answered':false 
		 }


 	];

 	$scope.questionsAnswered=0;

	 $scope.check = function(ans, val){
	 	if(!ans.answered){
	 		$scope.questionsAnswered++;
	 		if(val === ans.answer){
	 			$scope.points += 10;
	 			ans.answered = true;
	 		}
	 		else{
	 			$scope.points -=5;
	 			ans.answered = true;
	 		}
	 	}
	 }

	 $scope.points = 0;

	 $scope.optionNums = [{'type': 'choice'}];

	 $scope.optionAdd = function(){
	 	$scope.optionNums.push({'type': 'choice'});
	 };

	 $scope.newQuestion = {};

	 $scope.submit = function(){
	 	$scope.quiz.push($scope.newQuestion);
	 	$scope.newQuestion = {};
	 };

	 $scope.time = 30;

	$scope.timer = function(){
			 
		if($scope.time>0){
			$scope.time--;
		 $timeout($scope.timer, 1000);
		}
		// else{
		// 	alert("YOUUUU ARE AWESOME!!!!")
		// }
	}

	$scope.endQuiz = function(quizLength) {
		if (quizLength===$scope.questionsAnswered){
			console.log("yoooooooooo")
			
			return true;
		}
		else{
			return false;
		}
	}


















































  });
