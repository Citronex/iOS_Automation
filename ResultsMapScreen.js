"use strict";

var ResultsMapScreen = {
	showList: function () {
		log("Switching to the list of results");
		var toggle = this.toolbar().segmentedControls()[0];
		toggle.buttons()['List'].tap();
	},
	WaitaSecond: function(seconds) {
		log("Wait until map loads");
		var target = UIATarget.localTarget();
		target.delay(seconds);
	},
};

ResultsMapScreen.__proto__=Screen;

