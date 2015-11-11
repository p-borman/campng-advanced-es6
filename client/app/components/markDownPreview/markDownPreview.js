import angular from 'angular';
import uiRouter from 'angular-ui-router';
import markDownPreviewComponent from './markDownPreview.component';

let markDownPreviewModule = angular.module('markDownPreview', [
  uiRouter
])

.directive('markDownPreview', markDownPreviewComponent);

export default markDownPreviewModule;
