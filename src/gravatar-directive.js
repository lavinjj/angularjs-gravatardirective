'use strict';

/*
 * An Simple AngularJS Gravatar Directive
 *
 * Written by Jim Lavin
 * http://codingsmackdown.tv
 *
 */

angular.module('ui-gravatar', ['md5']).
    factory('gravatarImageService', function (md5) {
        return {
            getImageSrc : function(value, size, rating, defaultUrl, secure) {
                // convert the value to lower case and then to a md5 hash
                var hash = md5.createHash(value.toLowerCase());
                var src = (secure ? 'https://secure' : 'http://www' ) + '.gravatar.com/avatar/' + hash + '?s=' + size + '&r=' + rating + '&d=' + defaultUrl;
                return src;
            }
        };
    }).
    directive('gravatarImage', ['gravatarImageService', function (gravatarImageService) {
        return {
            restrict:"EAC",
            link:function (scope, elm, attrs) {
                // by default the values will come in as undefined so we need to setup a
                // watch to notify us when the value changes
                scope.$watch(attrs.email, function (value) {
                    // let's do nothing if the value comes in empty, null or undefined
                    if ((value !== null) && (value !== undefined) && (value !== '') && (null != value.match(/.*@.*\..{2}/))) {
                        // parse the size attribute
                        var size = attrs.size;
                        // default to 40 pixels if not set
                        if((size=== null) || (size == undefined) || (size == '')){
                            size = 40;
                        }
                        // parse the ratings attribute
                        var rating = attrs.rating;
                        // default to pg if not set
                        if((rating === null) || (rating === undefined)|| (rating === '')){
                            rating = 'pg';
                        }
                        // parse the default image url
                        var defaultUrl = attrs.default;
                        if((defaultUrl === null) || (defaultUrl === undefined)|| (defaultUrl === '')) {
                            defaultUrl = '404';
                        }
                        var src = gravatarImageService.getImageSrc(value, size, rating, defaultUrl, attrs.secure);
                        // construct the tag to insert into the element
                        var tag = '<img class="gravatar-icon" src="' + src + '" >';
                        //remove any existing imgs 
                        elm.find('img').remove();
                        // insert the tag into the element
                        elm.append(tag);
                    }
                });
            }};
    }]);
