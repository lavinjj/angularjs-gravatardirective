describe('gravatar directive', function() {
    var elm;
    var scope;


    // load the localization code
    beforeEach(module('angularjs-gravatardirective'));

    beforeEach(inject(function ($rootScope, $compile) {
        // we might move this tpl into an html file as well...
        elm = angular.element('<gravatar-image data-gravatar-email="email" data-gravatar-size="120" data-gravatar-rating="pg" data-gravatar-default="identicon" data-gravatar-css-class="btn btn-large" ></gravatar-image>');

        scope = $rootScope;
        scope.email = 'jlavin@jimlavin.net';

        $compile(elm)(scope);
        scope.$digest();
    }));

    it('should add image tag to the element', function () {
        var image = elm.html();

        expect(image).toContain('<img');
    });

    it('should add md5 of the email address to the image tag', function () {
        var image = elm.html();

        expect(image).toContain('80b03752791145a3fdd027b154d7b42b');
    });

    it('should add size parameter of 120 pixels to the image tag', function () {
        var image = elm.html();

        expect(image).toContain('s=120');
    });

    it('should add a rating parameter of PG to the image tag', function () {
        var image = elm.html();

        expect(image).toContain('r=pg');
    });

    it('should add a default image parameter of identicon to the image tag', function () {
        var image = elm.html();

        expect(image).toContain('d=identicon');
    });

    it('should add a parse the data-cc-class attribute and assign it to the class attribute', function () {
        var cssClass = elm.html();

        expect(cssClass).toContain('class="btn btn-large"');
    });
});
