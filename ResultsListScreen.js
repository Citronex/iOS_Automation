"use strict";

var ResultsListScreen = {
	assertResult: function(name) {
		log("Checking list for result", name);
		var tableView = this.window().tableViews()[0];
		var cell = tableView.cells()[name];
		assert(cell.isValid())
	},
	goBack: function() {
		var backButton = this.navigationBar().leftButton();
		backButton.tap();

	},
}

ResultsListScreen.__proto__=Screen;
