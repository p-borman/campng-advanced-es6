import template from './markDownPreview.html';
import controller from './markDownPreview.controller';
import './markDownPreview.styl';

let markDownPreviewComponent = function () {
  return {
    restrict: 'E',
    scope: {
      text: "=",
      headerText: "@"
    },
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default markDownPreviewComponent;
