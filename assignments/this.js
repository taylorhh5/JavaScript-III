/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. The function is called in the global scope.
* 2. The function is called as a method.
* 3. In a constructor function it refers a specific instance of the object using the new keyword.
  4. The function is called by .call or .apply.
*  
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function sayYear(year) {
    console.log(this);
    return year;
  }
  console.log (sayYear("2019"));

// Principle 2

// code example for Implicit Binding

const myObj = {
    greeting: 'Hi,',
    myState: function(state) {
      console.log(`${this.greeting} the state I live in is ${state}`);
      console.log(this);
    }
  };
  myObj.myState('Virginia');

// Principle 3

// code example for New Binding

function food (favorite){
      this.food = favorite;
     }
    
     let myFavoriteFood = new food('Mexican');
     let leastFavorite = new food ('sushi');
    
    console.log(`My favorite food is ${myFavoriteFood.food}`);
    console.log(`My least food is ${leastFavorite.food}`);

// Principle 4



function dog(){
console.log(this.bark);
 }

const myDog = {
   name: 'Fred',
   bark: 'Ruff!',
 }

 dog.call(myDog); 


// code example for Explicit Binding