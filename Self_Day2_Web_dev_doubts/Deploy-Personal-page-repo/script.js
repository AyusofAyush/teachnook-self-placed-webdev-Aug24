// IIFE - Immediately Invoked Function Expression
(function() {
    var demo = "Hello world!"; // hositing is happening here 
    // demo variable is private variable 
    window.alert('Welcome to the Personal Page');
})();

// console.log('Trying to access demo', demo); // Throws ReferenceError 