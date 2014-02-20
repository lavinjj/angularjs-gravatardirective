/*
 * An Simple AngularJS Gravatar Directive
 *
 * Written by Jim Lavin
 * http://codingsmackdown.tv
 *
 */

// Create all modules and define dependencies to make sure they exist
// and are loaded in the correct order to satisfy dependency injection
// before all nested files are concatenated by Grunt

// Config
angular.module('angularjs-gravatardirective.config', [])
    .value('angularjs-gravatardirective.config', {
        debug: true
    });

// Modules
angular.module('angularjs-gravatardirective.directives', []);
angular.module('angularjs-gravatardirective.services', []);
angular.module('angularjs-gravatardirective',
    [
        'angularjs-gravatardirective.config',
        'angularjs-gravatardirective.directives',
        'angularjs-gravatardirective.services'
    ]);
