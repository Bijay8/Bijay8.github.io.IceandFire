
// this is without $scope
myApp.controller('mainController',['$http','bookService','$filter',function($http,bookService,$filter) {
  //create a context

  var main = this;
  this.books= [];
  this.type=[];
  this.characters=[];
  this.count=0  
  this.result='';
  this.culture=[]

//Setting Specific color for all book character and houses for special sort 
  this.myObj = {
        "color" : "blue",
        "background-color" : "LightGrey",
    }
    

//this function toggles the result of click function
  this.Bysort=function(result)
  {

    if (main.result==true)
         return(main.result=false)
     else
         return(main.result=true)

  }

  this.loadDetails = function(){
   
 bookService.getBooks()
.then(function successCallback(response) {
         
          for( i in response.data)
          { 
          //Getting response of book API
            (main.type).push(response.data[i]);

            //Getting response of book api and using ng-sanitize to display it in a special sort.
             (main.books).push("<h2><em>Books : "+response.data[i].name+ "<em></h2></br>"+
                                "Author:"+response.data[i].authors[0]
                               +"<br> ReleasedDate:"+$filter('date')(response.data[i].released,"mediumDate"))
          }
    

        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          alert("some error occurred. Check the console.");
          console.log(response);

        });


 bookService.getCharacters()
.then(function successCallback(response) {
     
          console.log(response);
            for( i in response.data)
          {  
            //Getting response of character  API and storing it in array

            (main.type).push(response.data[i]);
            
             //Getting response of character api and using ng-sanitize to display it in a special sort.
             
             main.count=(response.data[i].books).length;
             main.culture=response.data[i].culture;
             //This will  display culture for only those characters for which it is present
             if(main.culture=="")
             {
             (main.books).push("<h2><em>Characters : "+ response.data[i].aliases[0]+
              "<em></h2><br> Book Count:"+main.count);
             }
             else
              (main.books).push("<h2><em>Characters : "+ response.data[i].aliases[0]+
              "<em></h2><br> Book Count :"+main.count+"<br>Culture : "+main.culture);
             }
           
        }, function errorCallback(response) {
        
          alert("some error occurred. Check the console.");
          console.log(response);
        });
  

 bookService.getHouses()
.then(function successCallback(response) {
          // this callback will be called asynchronously
          // when the response is available
      
          console.log(response);

            for( i in response.data)
          {   
            //Getting response of character  API and storing it in array
             (main.type).push(response.data[i]);
              //Getting response of character api and using ng-sanitize to display it in a special sort.
             (main.books).push("<h2> <em> Houses : "+ response.data[i].name+"<em></h2>"+
                                "Region :"+response.data[i].region)
          } 



        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          alert("some error occurred. Check the console.");
          console.log(response);
         
        });
  
  }


  this.loadDetails();
  

  
}]); // end controller