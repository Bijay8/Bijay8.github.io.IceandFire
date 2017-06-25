myApp.controller('dateController',['$http','bookService','$filter',function($http,bookService,$filter) {

var main=this;
main.indate1=bookService.indate
var indate=bookService.indate
main.find="0";
  main.type1=[];


  this.load=function()
  {
  	
 bookService.getBooks()
.then(function successCallback(response) { 
	//alert("service"+indate)


  main.obj1 = {
        "color" : "#008080",
        "background-color" : "#E0FFFF"
                 } 
   for (i in response.data)
{   //will filter reults for books published after input year
    if(parseInt(($filter('date')(response.data[i].released,'yyyy'))) >= parseInt(indate))
      {
        (main.type1).push(response.data[i]);
        console.log(response.data[i].released);
        main.find='1';
        //alert(find)
      }
    
   }
   //Error message in case no book found
     if(main.find=='0')
      {
      	main.disp="No details found. Please go back and enter Correct year to get list of book published after that year"
      }
});
}
//error message for invalid year
 if(parseInt(indate) > 1950 && parseInt(indate) <2017)
 
     this.load();

else

	main.disp="Invalid year.Enter year greater than 1950 or less than 2017"

}]);