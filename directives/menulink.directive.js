(function(){
  'use strict';

  angular.module('common.directives')
    .directive('menuLink', function () {
      return {
        scope: {
          section: '='
        },
        templateUrl: 'partials/menuLink.html',
        link: function ($scope, $element) {
          var controller = $element.parent().controller();

          $scope.focusSection = function () {
            // set flag to be used later when
            // $locationChangeSuccess calls openPage()
            controller.autoFocusContent = true;
          };
        }
      };
    })
})();