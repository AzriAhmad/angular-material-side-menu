/*
* menuLink directive use for creating links to the sub-items ui-route state
*/
application
.run(['$templateCache', function ($templateCache) {
  $templateCache.put('partials/menuLink.html',
    '<md-button ng-class="{\'{{section.icon}}\' : true}" ui-sref-active="active" \n' +
    '  ui-sref="{{section.state}}" ng-click="focusSection()">\n' +
    '  {{section | humanizeDoc}}\n' +
    '  <span  class="md-visually-hidden "\n' +
    '    ng-if="isSelected()">\n' +
    '    current page\n' +
    '  </span>\n' +
    '</md-button>\n' +
    '');
}])
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
});