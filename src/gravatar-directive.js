'use strict';

/**
 * A Simple AngularJS Gravatar Directive
 *
 * Written by Jim Lavin
 * http://codingsmackdown.tv
 *
 */
angular.module('ui-gravatar', ['md5']).directive('gravatarImage', ['md5', function(md5) {
    return {
        restrict: 'EAC',
    	link: function(scope, elem, attrs) {
    		// by default the values will come in as undefined so we need to set up 
    		// a watch to notify us when the value changes
    		scope.$watch(attrs.email, function(value) {
    			var empty = function(variable) {
	    			return typeof variable !== 'undefined' ? true : false;
    			};
    			// Let's do nothing if the value comes in empty, null, or undefined
    			if (empty(value) && value.match(/.*@.*\..{2}/) != null) {
    				if (/\S+@\S+\.\S+/.test(value)) {
    					var hash = md5.createHash(value.toLowerCase()), //convert value to lowercase, then md5 hash
    						size = empty(attrs.size) ? 40 : attrs.size, //parse the size attribute, default to 40px
    						rating = empty(attrs.rating) ? 'pg' : attrs.rating, //parse ratings attribute, default to 'pg'
    						url = empty(attrs.default) ? '404' : attrs.default, //parse default image url, default to '404'
    						tag = '<img class="gravatar-icon" src="' + (attrs.secure ? 'https://secure' : 'http://www')
    							+ '.gravatar.com/avatar/' + hash + '?s=' + size + '&r=' + rating + '&d=' + url + '" />'; //construct the tag
    					$(elem).find('.gravatar-icon').remove(); //remove any existing gravatar imgs
    					elem.append(tag); //insert the tag into the element
    				}
    			}
    		});
    	}
    }
}]);
