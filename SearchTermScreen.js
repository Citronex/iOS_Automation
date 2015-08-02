
 var SearchTermScreen = {
 	addTerm: function (name) {
 		log("Showing alert to add search term");
 		var target = UIATarget.localTarget();
 		var app = target.frontMostApp();
 		UIATarget.onAlert = function() {
 			return true;
 		};
 		app.navigationBar().rightButton().tap();
 		app.keyboard().typeString(name);
 		app.alert().defaultButton().tap();
 	},
 	assertTerm: function(index, term) {
 		log("Checking for", term, "at index", index);
 		var target = UIATarget.localTarget();
 		var app = target.frontMostApp();
 		var window = app.mainWindow();
 		var cell = window.tableViews()[0].cells()[index];
 		assertEqual(cell.name(), term);
 	},
 	removeTerm: function(name){
 		log("Removing search term", name);
 		var leftButton = this.navigationBar().leftButton();
 		leftButton.tap();
 		var tableView = this.window().tableViews()[0];
 		var cell = tableView.cells()[name];
 		var deleteSwitch = cell.switches()[0];
 		deleteSwitch.tap();
 		var deleteButton = cell.buttons()[0];
 		deleteButton.tap();
 		leftButton.tap();
	},
	assertNoTerm: function(name) {
		log("Assert no term named", name);
		this.target().pushTimeout(0.1);
		var tableView = this.window().tableViews()[0];
		var cell = tableView.cells()[name];
		this.target().popTimeout();
		assert(!cell.isValid(), "Cell still there");
	},
	tapTerm: function(name) {
		var tableView = this.window().tableViews()[0];
		tableView.cells()[name].tap();
	}
 };

 SearchTermScreen.__proto__= Screen;


