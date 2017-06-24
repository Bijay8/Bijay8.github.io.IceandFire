myApp.factory('bookService',function bookFactory($http)
{
 
 var blogApi={};
 var mainUrl='https://www.anapioficeandfire.com/api';
 var baseUrl='https://www.anapioficeandfire.com/api/books';
 blogApi.getBooks=function()
 {

 	return $http({
 		method:'GET',
 		url:baseUrl
 	});
 }

var baseUrl1='https://www.anapioficeandfire.com/api/houses'

  blogApi.getHouses=function()
 {
 	return $http({
 		method:'GET',
 		url:baseUrl1
 	});
 }

var baseUrl2='https://www.anapioficeandfire.com/api/characters'
 blogApi.getCharacters=function()
 {
 	return $http({
 		method:'get',
 		url:baseUrl2
 	})
 }

// This service will be used to call book 
//On basis of url1 and url2 ,specific information for book will be fetched
 blogApi.viewBooks=function(url1,url2)
 {
 	return $http({
 		method:'GET',
 		url:mainUrl+'/'+url1+'/'+url2
 	});
 }

// This service will be used to call house 
//On basis of url1 and url2 ,specific information for house will be fetched
  blogApi.viewHouses=function(url1,url2)
 {//alert(url1+url2)
 	return $http({
 		method:'GET',
 		url:mainUrl+'/'+url1+'/'+url2
 	});
 }
 
// This service will be used to call house
//On basis of url1 and url2 ,specific information for house will be fetched
   blogApi.viewCharacters=function(url1,url2)
 {//alert(url1+url2)
 	return $http({
 		method:'GET',
 		url:mainUrl+'/'+url1+'/'+url2
 	});
 }
    blogApi.viewchar=function(cur)
 {//alert(url1+url2)
 	return $http({
 		method:'GET',
 		url:cur
 	});
 }

     blogApi.viewhouse=function(cur)
 {//alert(url1+url2)
 	return $http({
 		method:'GET',
 		url:cur


 	});
 }
      blogApi.viewbook=function(cur)
 {//alert(url1+url2)
 	return $http({
 		method:'GET',
 		url:cur
 	});
 }
 return blogApi;	

});