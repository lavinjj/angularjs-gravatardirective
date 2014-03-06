angular.module('angularjs-gravatardirective.services')
    .factory('gravatarImageService', ['md5', function (md5) {
        return {
            getImageSrc: function (value, size, rating, defaultUrl, secure) {
                // convert the value to lower case and then to a md5 hash
                var hash = md5.createHash(value.toLowerCase());
                var src = (secure ? 'https://secure' : 'http://www' ) + '.gravatar.com/avatar/' + hash;
                if (size) src += '?s=' + size;
                if (rating) src += '&r=' + rating;
                if (defaultUrl) src += '&d=' + defaultUrl;
                return src;
            }
        };
    }]);
