/*
* menuLink directive use for creating links to the sub-items ui-route state
*/
application
  .directive('menuLink', function () {
    return {
      scope: {
        section: '='
      },
      templateUrl: 'partials/navLeftBarLink.tmpl.html',
      // templateUrl: 'partials/menu-link.tmpl.html',
      link: function ($scope, $element) {
        var controller = $element.parent().controller();

        $scope.focusSection = function () {
          // set flag to be used later when
          // $locationChangeSuccess calls openPage()
          controller.autoFocusContent = true;
        };
      }
    };
  });