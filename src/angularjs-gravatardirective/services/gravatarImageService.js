angular.module('angularjs-gravatardirective.services')
  .factory('gravatarImageService', ['md5', function(md5) {
    return {
      getImageSrc: function(value, size, rating, defaultUrl, secure, mode) {
        var emailHashStr;
        if (mode === 'hash') {
          // directly use hashed value
          emailHashStr = value;
        } else {
          // convert the value to lower case and then to a md5 hash
          emailHashStr = md5.createHash(value.toLowerCase());
        }
        var src = (secure ? 'https://secure' : 'http://www') +
          '.gravatar.com/avatar/' + emailHashStr;
        if (size) src += '?s=' + size;
        if (rating) src += '&r=' + rating;
        if (defaultUrl) src += '&d=' + defaultUrl;
        return src;
      }
    };
  }]);
