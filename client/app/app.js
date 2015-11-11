import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import Candidates from './candidates/candidates';
import Filters from './filters/filters';
import { markdown } from "markdown";

import "bootstrap-webpack";
import 'normalize.css';

jQuery( () => {
  jQuery(".rating").raty({path: "/images",click: function(score, event) { window.alert(score); }});
});

console.log(markdown.toHTML("**foo**"));

angular.module('app', [
  uiRouter,
  Common.name,
  Components.name,
  Candidates.name,
  Filters.name
])

.directive('app', AppComponent);
