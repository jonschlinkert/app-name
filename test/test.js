/*!
 * app-name <https://github.com/jonschlinkert/app-name
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors
 * Licensed under the MIT License (MIT)
 */

var expect = require('chai').expect;
var appName = require('../');


describe('appName', function () {
  describe('when a replacement string is passed', function () {

    it('should strip a string from the string', function () {
      var actual = appName('foo', 'foo');
      var expected = '';
      expect(actual).to.eql('');
    });

    it('should strip a string from the string', function () {
      var actual = appName('grunt-assemble', 'grunt');
      expect(actual).to.eql('assemble');
    });

    it('should not strip a partial word from the string', function () {
      var actual = appName('function', 'func');
      expect(actual).to.eql('function');
    });

  });

  describe('when a replacement array is passed', function () {
    it('should strip an array of words from the string', function () {
      var actual = appName('handlebars-helper-slugify', ['handlebars', 'helper']);
      expect(actual).to.eql('slugify');
    });

    it('should strip an array of words from the string', function () {
      var actual = appName('generator-foo-bar-baz', ['generator']);
      expect(actual).to.eql('foo-bar-baz');
    });

    it('should strip an array of words from the string', function () {
      var actual = appName('handlebars-helper-slugify', ['handlebars-helper']);
      expect(actual).to.eql('slugify');
    });

    it('should not strip a partial word from the string', function () {
      var actual = appName('function', ['func']);
      expect(actual).to.eql('function');
    });

    it('should condense consecutive non-word characters', function () {
      var actual = appName('foo & bar_baz-quux', ['foo', 'quux']);
      expect(actual).to.eql('bar-baz');
    });
  });

  describe('options', function () {
    describe('when `last` is defined', function () {
      it('should strip words from the string then return the last word in the remainder', function () {
        var actual = appName('generator-foo-bar-baz', ['generator'], {last: true});
        expect(actual).to.eql('baz');
      });
    });

    describe('when `first` is defined', function () {
      it('should strip words from the string then return the first word in the remainder', function () {
        var actual = appName('generator-foo-bar-baz', ['generator'], {first: true});
        expect(actual).to.eql('foo');
      });
    });

    describe('when a custom separator is defined', function () {
      it('should use the custom separator to join the resulting string', function () {
        var actual = appName('foo bar baz-quux', ['foo', 'quux'], {sep: '_'});
        expect(actual).to.eql('bar_baz');
      });
    });
  });
});