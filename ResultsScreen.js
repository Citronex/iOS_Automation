"use strict";

var ResultsScreen = {
	showList: function () {
		log("Switching to the list of results");
		var toggle = this.toolbar().segmentedControls()[0];
		toggle.buttons()['List'].tap();
	}
};

ResultsScreen.__proto__=Screen;

