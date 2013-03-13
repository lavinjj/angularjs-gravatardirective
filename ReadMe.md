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

For more information about the Gravatar Image request check out their [Developer's Reference](http://en.gravatar.com/site/implement/).

