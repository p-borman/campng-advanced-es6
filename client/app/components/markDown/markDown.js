import angular from 'angular';
import uiRouter from 'angular-ui-router';
import markDownComponent from './markDown.component';

let markDownModule = angular.module('markDown', [
  uiRouter
])

.directive('markDown', markDownComponent);

export default markDownModule;
