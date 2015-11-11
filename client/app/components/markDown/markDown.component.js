import template from './markDown.html';
import controller from './markDown.controller';
import './markDown.styl';

let markDownComponent = function () {
  return {
    restrict: 'E',
    scope: {text:"="},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default markDownComponent;
