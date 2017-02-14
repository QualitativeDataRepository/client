'use strict';

var queryUrl = require('../returnQueryFromAnnotationID');

describe('queryUrl', function () {
         var qURL;
         
         beforeEach(function () {
                    qURL = queryUrl('query__user__user_name');
                    longqURL = queryUrl('query__user__user_name%20any__hello');
                    trickyURL = queryUrl('query%20user_bob__helloany__hello');
                    });
         
         it('returns an annotation string as a query', function () {
            assert.equal(qURL, 'user:username');
            });
         
         it('accepts longer queries', function () {
            assert.equal(lonqqURL, 'user:username any:hello');
            });
         
         it ('is not tricked by confounding usernames or queries'), function() {
            assert.equal(trickyURL, 'query user_bob__hello any:hello');
         });
