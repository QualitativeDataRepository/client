'use strict';

var queryUrl = require('../returnQueryFromAnnotationID');

describe('queryUrl', function () {
         var qURL, longqURL, trickyqURL;
         
         beforeEach(function () {
                    qURL = queryUrl('query__user__user_name');
                    longqURL = queryUrl('query__user__user_name%20any__hello');
                    trickyqURL = queryUrl('query%20user_bob__helloany__hello');
                    });
         
         it('returns an annotation string as a query', function () {
            assert.equal(qURL, 'user:user_name');
            });
         
         it('accepts longer queries', function () {
            assert.equal(longqURL, 'user:user_name  any:hello');
            });
         
         it ('is not tricked by confounding usernames or queries', function() {
             assert.equal(trickyqURL, 'query user_bob__hello any:hello');
            });
});
