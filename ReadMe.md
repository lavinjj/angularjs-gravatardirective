#AngularJS Gravatar Image Directive

This is a simple AngularJS Directive that takes an email address and creates an image tag to pull an avatar image form the Gravatar web site.

A complete tutorial on how the directive was written is at [Creating a Simple AngularJS Directive](http://codingsmackdown.tv/blog/2012/12/14/creating-a-simple-angularjs-directive/)

## Usage

To use the directive:

1. Include the gravatar-directive.js and md5-service.js files in your project and include script tags for each in your wb page.
2. Add the following dependencies to your AngularJS app; 'ui-gravatar' and 'md5'.
3. Add the directive where you want the image to be displayed. See sample app for directive usage.


## Configuration

You can configure the directive using the following attributes:

* Email - You must supply an email address for the directive using the data-email attribute.
* Size - You can specify the size of the avatar image using the data-size attribute. The default is 40 pixels.
* Rating - You can specify a rating to limit what avatars are displayed. The default rating is PG.
* Default Image - You can specify a default image to display if the email address does not have an associated avatar. The default is 404.
* Secure - You can optionally specify a true value in the data-secure attribute to request the SSL version of the avatar.
* cssClass - You can optionally specify css classes to apply to the resulting image. The default css class is gravatar-icon.

For more information about the Gravatar Image request check out their [Developer's Reference](http://en.gravatar.com/site/implement/).

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
