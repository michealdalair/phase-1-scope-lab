// Write your solution in this file!
  var customerName= "bob";
 
 
  function upperCaseCustomerName(){
   customerName= customerName.toUpperCase();

  

}



function setBestCustomer(){
     bestCustomer = 'not bob'

  }



  //See the consequences of declaring a variable in global scope, by writing a new function called overwriteBestCustomer() that changes that bestCustomer variable to 'maybe bob'.
    function overwriteBestCustomer(){
bestCustomer='maybe bob'


    }


     const leastFavoriteCustomer= "mike"
function changeLeastFavoriteCustomer(){
        leastFavoriteCustomer= "jones"

}