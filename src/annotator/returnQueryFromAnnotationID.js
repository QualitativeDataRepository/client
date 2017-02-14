'use strict';

// A set of functions to prepare a query from a url request
//
// These functions take values from var annotations
// produced in a url fragment
// ( e.g. http://www.example.com/path/to/file
//        #annotations:query__user__username)
// in settings
// and converts it to a search query, detecting
// tags like user:, any: and tag: along the way.
//

function removeQueryLine (annotations) {
    // separate function in hopes it can be deleted upon better solution
    // this could accept "q__" at the risk of failing on user:faq__man
    var result = annotations.replace(/^query__/i, '');
    return result;
}

function returnQueryFromAnnotationID (annotations){
    //
    var query = "";
    if (annotations.match(/^query__/i)) {
        annotations = removeQueryLine(annotations);
    }
    query = annotations.replace(/(user|any|tag)__/gi, function (tag) {
                                return ' ' + tag.replace("__", "") + ':';
                                }).trim();
    return decodeURI(query);
}

module.exports = returnQueryFromAnnotationID;
