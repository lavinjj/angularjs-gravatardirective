angular.module('angularjs-gravatardirective.directives')
    .directive('gravatarImage', ['gravatarImageService', function (gravatarImageService) {
        return {
            restrict:"EAC",
            link:function (scope, elm, attrs) {
                // by default the values will come in as undefined so we need to setup a
                // watch to notify us when the value changes
                scope.$watch(attrs.gravatarEmail, function (value) {
                    // let's do nothing if the value comes in empty, null or undefined
                    if ((value !== null) && (value !== undefined) && (value !== '') && (null !== value.match(/.*@.*\..{2}/))) {
                        // parse the size attribute
                        var size = attrs.gravatarSize || 40;
                        // parse the ratings attribute
                        var rating = attrs.gravatarRating || 'pg';
                        // parse the default image url
                        var defaultUrl = attrs.gravatarDefault || 'identicon';
                        // parse css class
                        var cssClass = attrs.gravatarCssClass || 'gravatar-icon';
                        // get image src from service
                        var src = gravatarImageService.getImageSrc(value, size, rating, defaultUrl, attrs.gravatarSecure);
                        // construct the tag to insert into the element
                        var tag = '<img class="' + cssClass + '" src="' + src + '" >';
                        //remove any existing imgs 
                        elm.find('img').remove();
                        // insert the tag into the element
                        elm.append(tag);
                        // add handler to remove if image fails to load
                        elm.find('img').bind('error', function() {
                            elm.find('img').remove();
                        });
                    }
                });
            }};
    }]);
