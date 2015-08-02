"use strict";
#import "Screen.js";
#import "SearchTermScreen.js";
#import "ResultsMapScreen.js";
#import "ResultsListScreen.js";


//var name1 = "you";
//var name2 = "me";

//function to log neutral messages
function log() { //Variable # of arguments
    var msg = Array.prototype.join.call(arguments, ', ');
    UIALogger.logMessage(msg);
}

//log example
//log("we should unite", name1, name2);

//function declare and manage log groups
function test (description, steps) {
    try {
        UIALogger.logStart(description);
        steps();
        UIALogger.logPass("Test passed");
    } catch(exception) {
        UIALogger.logError(exception.message);
        UIATarget.localTarget().logElementTree();
        UIALogger.logFail("Test failed");
        throw exception;
    }
    
}

//clean way to make assertions
function assert(value, failMsg) {
    if (value) return;
    if (!failMsg) failMsg = "Assert failed";
    throw new Error(failMsg);
}

/*example usage of assert function
test("Build a better assertion", function() {
     var term = "fish";
     assert(term == "coffee", "Expected coffee, but is '" + term + "' instead");
     });*/

// testing for equality with customized output
function assertEqual(value1, value2, failMsg) {
    if (value1 === value2) return;
    if (!failMsg) failMsg = "Assert Equal failed";
    var fullMsg = failMsg + ": '" + value1 + "'" + " !== '" + value2 + "'";
    assert(false, fullMsg);
}

/*invoking assertEqual example

test("Build an even better assertion", function() {
     var term = "fish";
     assertEqual(term, "coffee", "terms are not equal");
     }); */


//testing for not equality
function assertNotEqual(value1, value2, failMsg) {
    if (value1 !== value2) return;
    if (!failMsg) failMsg = "Assert Not Equal failed";
    var fullMsg = failMsg + ": '" + value1 + "'" + " === '" + value2 + "'";
    assert(false, fullMsg);
}

/*invoking assertNotEqual example
test("Building assert not equal", function() {
     var term = "fish";
     assertNotEqual(term, "fish", "Terms are the same");
     });*/





