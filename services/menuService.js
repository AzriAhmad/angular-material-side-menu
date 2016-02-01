
angular.module('common.services')
  .factory('menu', [
      '$location',
      '$rootScope',
      function ($location) {

        //The object for storing structure of the menu is just an array named 
        // sections which allows us to visually see the structure easy and add items to really easy.
        var sections = [{
          name: 'Home',
          state: 'home.helloWorld',
          type: 'link'
        }];

        sections.push({
          name: 'Application',
          type: 'toggle',
          pages: [{
            name: 'Regular Staff',
            type: 'link',
            state: 'home.app.regularStaff'
          }, {
            name: 'Contract Staff',
            state: 'home.app.contractStaff',
            type: 'link'
          },
            {
              name: 'Department',
              state: 'home.app.deparmment',
              type: 'link'
            }]
        });

        sections.push({
          name: 'Report',
          type: 'toggle',
          pages: [{
            name: 'Faculty Load Chart',
            type: 'link',
            state: 'report.FLC',
            icon: 'fa fa-group'
          }, {
            name: 'Other Report',
            state: 'reprot.other',
            type: 'link',
            icon: 'fa fa-map-marker'
          }]
        });

        sections.push({
          name: 'Admin',
          type: 'link',
          state: 'app.admin'
        });
        var self;

        return self = {
          sections: sections,

          toggleSelectSection: function (section) {
            self.openedSection = (self.openedSection === section ? null : section);
          },
          isSectionSelected: function (section) {
            return self.openedSection === section;
          },

          selectPage: function (section, page) {
            page && page.url && $location.path(page.url);
            self.currentSection = section;
            self.currentPage = page;
          }
        };

      }])

    //take all whitespace out of string
    .filter('nospace', function () {
      return function (value) {
        return (!value) ? '' : value.replace(/ /g, '');
      };
    })
    //transform object to to readable links
    .filter('humanizeDoc', function () {
      return function (doc) {
        if (!doc) return;
        if (doc.type === 'directive') {
          return doc.name.replace(/([A-Z])/g, function ($1) {
            return '-' + $1.toLowerCase();
          });
        }

        return doc.label || doc.name;
      };
    });
      
