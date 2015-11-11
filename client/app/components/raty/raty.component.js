import './raty.styl';

let ratyComponent = function () {
  return {
    restrict: 'E',
    scope: {
      rating:"="
    },
    link: function(scope, element, attrs) {
      var $ratyElm = jQuery(element);

      $ratyElm.raty({
        path: "/images",
        click(score, event) {
          scope.$apply(function() {
            scope.rating = score;
          });
        }
      });

      scope.$watch("rating", function(newValue, oldValue) {
        $ratyElm.raty("score", newValue);
      });
    }
  };
};

export default ratyComponent;
