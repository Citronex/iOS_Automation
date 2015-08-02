#import "env.js";

test("Removing the 'coffee' search term", function(){
     var s = SearchTermScreen;
     s.removeTerm('coffee');
     s.assertNoTerm('coffee');
     
     }); 

test("Putting the 'coffee' term into the list", function() {
 	var s = SearchTermScreen;
 	s.addTerm('coffee');
 	s.assertTerm(0, 'coffee');
 });

 test("Searching for 'coffee' in downtown San Francisco", function(){
 	SearchTermScreen.tapTerm("coffee");
    ResultsMapScreen.WaitaSecond(2); 
 	ResultsMapScreen.showList();
 	ResultsListScreen.assertResult("Taylor Street Coffee Shop, 0.2 mi");
 	ResultsListScreen.goBack();
 });
