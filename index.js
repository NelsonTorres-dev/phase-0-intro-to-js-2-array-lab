// Write your solution here!


const cats = ["Milo", "Otis", "Garfield"];

const newCats = [...cats, "Broom"];

const anotherCat = ['Arnold', ...cats]

const copyOfCats = cats.slice(0, cats.length -1);

const remoneFirst = cats.slice(1);



function destructivelyAppendCat(name){
    cats.push("Ralph")
 
}

function destructivelyPrependCat(name){
    cats.unshift("Bob")

}

function destructivelyRemoveLastCat(name){
    cats.pop();
}


function destructivelyRemoveFirstCat(name){
    cats.shift();
}


function appendCat(name){
  return newCats;
}

function prependCat(name){
    return anotherCat;
}

function removeLastCat(name){
   return copyOfCats;
}

function removeFirstCat(name){
    return remoneFirst;
}

