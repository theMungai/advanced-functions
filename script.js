/*
function greeting(){
    console.log("Hello")
}
greeting()

const function1 = function greeting(){
    console.log("Hello 2")
}

console.log(function1)

const object = {
    name : "Peter",
    fun : function() {
        console.log("Hello3")
    }
}

object.fun() */

/*
setTimeout(function(){
    console.log("Timeout")
},5000 )


setInterval(function(){
    // console.log("Hello")
},3000 )

*/


// Looping through an array using .forEach() method

const array = [
    "Watch Movies",
    "Wash dishes",
    "Make dinner"
].forEach(function(value){
    console.log(value)
})

const numbers = [1,2,3,4,5,6,7,8,9,10].forEach(
    function(value){
        console.log(value)
    }
)

/* In .forEach() method that is used to work as a loop, there is no CONTINUE function that is used to skip specified values. Here we use RETURN function to skip values.  */

const fruits = [
    "apple", 
    "grapes", 
    "oranges", 
    "mangoes"
].forEach(function(value){
    if(value === "oranges"){
        return
    }
    console.log(value)
})
// In the above function, "oranges" are not printed out


// create a variable called "add" and save function inside. This function will console.log(2+3). Run the function twice.

const add = function(){
    console.log(2 + 3)
}
add()
add()

function runTwice(fun){
    fun()
    fun()
}
runTwice(function(add){
    console.log("12b")
})
runTwice(add)

// create a Start button that when it is clicked, after 1 second, the text inside the button changes to "Finished"
function updateButton() {
    const startButton = document.querySelector("#start-btn")

    setTimeout(function(){
        startButton.innerHTML = "Finished"
    }, 1000)
}

// Modify another Start button so that when we click it, the text immediately changes to "Loading..." and then after 2 seconds it changes to finished

function updateButton2(){
    const startButton2 = document.querySelector("#start-btn2");
    startButton2.innerHTML = "Loading..."

    setTimeout(function(){
        startButton2.innerHTML = "Finished"
    },2000)
}

// use setInterval() and document.title to create the feature that changes the title every 2 seconds. 

/*
setInterval(function(){
    if(document.title === "App"){
        document.title = "(2) New Messages"
    }
    else{
        document.title = "App"
    }
},2000) */

/* Instead of changing document.title after every 2 seconds, create  buttons "Add" and "Remove" that controls the number of messages.

Don't let messages go below 0. Instead of displaying 0, display "App"

*/

const addTitle = document.querySelector(".add-title");
const removeTitle = document.querySelector(".remove-title");
let titleCount = 2;
document.title = "App"

setInterval(function (){
    if(document.title === "App"){
        document.title = "(2) New Messages"
    }
    else{
        document.title = "App"
    }
},2000)

addTitle.addEventListener('click', () => {
    document.title = `${titleCount} New Messages`
    titleCount ++;
    
})

removeTitle.addEventListener('click', () => {
    document.title = `${titleCount} New Messages`
    titleCount --;

    if(titleCount <= 0){
        document.title = "App"
    }
    
})