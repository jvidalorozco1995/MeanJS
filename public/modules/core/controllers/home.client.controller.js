'use strict';


angular.module('core').controller('HomeController', ['$scope', 'Authentication',
	function($scope, Authentication) {
		// This provides Authentication context.
		$scope.authentication = Authentication;

		$scope.alerts = [
			{
             	icon:'glyphicon glyphicon-user',
				colour:'btn-success',
				total:'20,438',
				description:'TOTAL CLIENTES'
			},

			{
				icon:'glyphicon-calendar',
				colour:'btn-primary',
				total:'20,438',
				description:'TOTAL CLIENTES'

			},

			{
				icon:'glyphicon-edit',
				colour:'btn-success',
				total:'20,438',
				description:'TOTAL CLIENTES'

			},

			{
				icon:'glyphicon-record',
				colour:'btn-success',
				total:'20,438',
				description:'TOTAL CLIENTES'

			},


			{
				icon:'glyphicon-eye-open',
				colour:'btn-warning',
				total:'20,438',
				description:'TOTAL CLIENTES'

			},


			{
				icon:'glyphicon-flag',
				colour:'btn-danger',
				total:'20,438',
				description:'TOTAL CLIENTES'

			}


		];



	}
]);