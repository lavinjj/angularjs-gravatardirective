#AngularJS Gravatar Image Directive

This is a simple AngularJS Directive that takes an email address and creates an image tag to pull an avatar image form the Gravatar web site.

A complete tutorial on how the directive was written is at [Creating a Simple AngularJS Directive](http://codingsmackdown.tv/blog/2012/12/14/creating-a-simple-angularjs-directive/)

## Usage

To use the directive:

1. Include angularjs-gravatardirective.js or angularjs-gravatardirective.min.js files in your project and include script tags for each in your wb page.
2. Add the following dependency to your AngularJS app; 'angularjs-gravatardirective'.
3. Add the directive where you want the image to be displayed. See sample app for directive usage.


## Configuration

You can configure the directive using the following attributes:

* Email - You must supply an email address for the directive using the data-email attribute.
* Size - You can specify the size of the avatar image using the data-size attribute. The default is 40 pixels.
* Rating - You can specify a rating to limit what avatars are displayed. The default rating is PG.
* Default Image - You can specify a default image to display if the email address does not have an associated avatar. The default is 404.
* Secure - You can optionally specify a true value in the data-secure attribute to request the SSL version of the avatar.
* cssClass - You can optionally specify css classes to apply to the resulting image. The default css class is gravatar-icon.

Note: All attributes must be proceeded with 'gravatar-' in order to keep from interfering with other angular library directives. See the directive unit tests and the sample app for an example.

For more information about the Gravatar Image request check out their [Developer's Reference](http://en.gravatar.com/site/implement/).

## Change Log

### v1.3.2 - Addresses Issue #18 'Unknown provider' error. the gravatarImageService was missing the minification array causing the service to not instantiate properly.

### v1.3.1 - Addresses Issue #17 Hide the image, when loading fails. Now the image element will be removed from the DOM if the image fails to load.

### v1.3.0 - Restructured library structure to take advantage of angularjs-library yeoman generator to generate a single file for use.

### v1.2.0 - Added pull request to move imageSrc to a service for use by external consumers.

### v1.1.0 - Added additional namespaces to all attributes to keep from interfering with other AngularJS Library Directives. Resolves Issue #13

## LICENSE

The MIT License

Copyright (c) 2012-2013 Coding Smackdown TV, http://codingsmackdown.tv

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
