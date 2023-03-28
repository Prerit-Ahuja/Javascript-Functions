// 1.

const FRUITS = ["Banana", "Orange", "Apple"];

// displaying Array:
console.log(FRUITS);

// Remove the last item of the FRUITS array.
FRUITS.pop();
console.log(FRUITS);

// Add "Kiwi" to the FRUITS array at the end.
FRUITS.push("Kiwi");
console.log(FRUITS);

// // Add "Tomato" to the FRUITS array at the front.
FRUITS.unshift("Tomato");
console.log(FRUITS);

// // Remove "Orange" and "Apple" from the FRUITS array
FRUITS.push("Apple"); //adding 'Apple' to the array
console.log(FRUITS);

FRUITS.splice(2,1); //removing 'orange'
console.log(FRUITS); 
FRUITS.splice(3,1); //removing 'apple'
console.log(FRUITS);

// Sort the FRUITS array alphabetically
FRUITS.sort();
console.log(FRUITS);

// 2.

function varTest() {
    var x = 1;
    {
      var x = 2;
      console.log(x); // value of x with explanation? 
    //   value of x is 2 as value of 'x' changes to 2 before printing inside block
    }
    console.log(x);  // value of x with explanation? 
    // value of x is 2 as x changes to 2 as 'var' has global scope
  }

  function letTest() {
    let x = 1;
    {
      let x = 2;
      console.log(x);  // value of x with explanation? 
    //   value of x will be 2 as value changes to 2 before printing
    }
    console.log(x);  // value of x with explanation? 
    // value of x will be 1 as scope of let is block scope after the block ends x take the value which is declared previously
  
  }
  varTest();
  letTest();

  //3.

  //We have given:
  let movies = [

    { title: 'Frozen', rating: 3, hasWatched: true  },
  
    { title: 'In Bruges', rating: 5, hasWatched: false  },
  
    { title: 'Mad Max Fury Road', rating: 4, hasWatched: true },
  
    { title: 'Les Miserables', rating: 3.5, hasWatched: false },
  
  ];
  //Print like this:
  //  You have watched "Frozen" - 3 stars
  //  You have not seen "In Bruges"-  5 stars
  //  You have watched "Mad Max Fury Road" - 4 stars
  //  You have not seen "Les Miserables"-  3.5 stars

  console.log(movies); // printing all details
  for(let m = 0; m<movies.length; m++){
    if(movies[m].hasWatched){
        console.log(`You have watched "${movies[m].title}" - ${movies[m].rating} stars`);
    }
    else{
        console.log(`You have not seen "${movies[m].title}"-  ${movies[m].rating} stars`);
    }
  }