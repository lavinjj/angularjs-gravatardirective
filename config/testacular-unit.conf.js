basePath = '../';

files = [
    JASMINE,
    JASMINE_ADAPTER,
    'app/components/angular/angular.js',
    'app/components/angular/angular-mocks.js',
    'src/*.js',
    'src/*-service.js',
    'src/*-test.js',
    'app/app/*.js'
];

autoWatch = true;

browsers = ['PhantomJS'];

junitReporter = {
  outputFile: 'test_out/unit.xml',
  suite: 'unit'
};
