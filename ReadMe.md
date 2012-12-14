#AngularJS Gravatar Image Directive

This is a simple AngularJS Directive that takes an email address and creates an image tag to pull an avatar image form the Gravatar web site.

A complete tutorial on how the directive was written is at [Creating a Simple AngularJS Directive]()

## Usage

To use the directive:

1. Include the gravatardirective.js file in your project and include a script tag in your wb page.
2. Add the dependency 'ui-gravatar' to your AngularJS app.
3. Add the directive where you want the image to be displayed. See sample app for directive usage.


## Configuration

You can configure the directive using the following attributes:

* Email - You must supply an email address for the directive using the data-email attribute.
* Size - You can specify the size of the avatar image using the data-size attribute. The default is 40 pixels.
* Rating - You can specify a rating to limit what avatars are displayed. The default rating is PG.
* Default Image - You can specify a default image to display if the email address does not have an associated avatar. The default is 404.

For more information about Gravatar Image request check out their [Developer's Reference](http://en.gravatar.com/site/implement/).

