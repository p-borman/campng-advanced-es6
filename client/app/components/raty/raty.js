import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ratyComponent from './raty.component';

let ratyModule = angular.module('raty', [
  uiRouter
])

.directive('raty', ratyComponent);

export default ratyModule;
