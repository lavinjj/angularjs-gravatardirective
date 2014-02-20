'use strict';

// Set the jasmine fixture path
// jasmine.getFixtures().fixturesPath = 'base/';

describe('angularjs-gravatardirective', function() {

    var module;
    var dependencies;
    dependencies = [];

    var hasModule = function(module) {
        return dependencies.indexOf(module) >= 0;
    };

    beforeEach(function() {

        // Get module
        module = angular.module('angularjs-gravatardirective');
        dependencies = module.requires;
    });

    it('should load config module', function() {
        expect(hasModule('angularjs-gravatardirective.config')).toBeTruthy();
    });

    

    
    it('should load directives module', function() {
        expect(hasModule('angularjs-gravatardirective.directives')).toBeTruthy();
    });
    

    
    it('should load services module', function() {
        expect(hasModule('angularjs-gravatardirective.services')).toBeTruthy();
    });
    

});
