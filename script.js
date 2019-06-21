// 1) ask the database to get the data
fetch("http://localhost:8088/food")
// 2) WebAuthentication, using the promise
// 3) receive the data

.then( data => {
// 4) convert the data to Javascript (an array of objects)
    return data.json();
})

.then( function(food){
// 5) loop over the array of objects
// 6) do stuff to the data
console.table(food)
let foodcontainer = document.querySelector("#food-list")
food.forEach(function (item){
    // 7) display the data in the dom as html
    foodcontainer.innerHTML += `<h2>I like to eat ${item.name}</h2>`
    })  
})


// this will allow you to return data if its a single line of code without curly brackets, 
// this will only work with a single line of code, if you need multiple lines of code this will not work
// this refers to the functino on line 6
// .then( data => data.json())

// fat arrows are used for ananymous functions and return functions

// fetch()
// .then( data => data.json())
// .then( foodItem => console.log(foodItem))