//Continuous Scrolling Function

var scrollDirection = 1, pageScroll;
pageScroll = function() {
    window.scrollBy(0,scrollDirection); // horizontal and vertical scroll increments
    scrolldelay = setTimeout(pageScroll,5); // scrolls every 100 milliseconds
    if ( (window.scrollY === 0) || (window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        scrollDirection = -1*scrollDirection;
    }
}
pageScroll();



// //  === Print Console ===
// console.log('Hey, Nouman');

// // === Variables ===
// let name = 'Nomi';
// console.log(name);

// let firstName = 'Muhammad';
// let secondName = 'Nouman';
// console.log(firstName,secondName)

// // === let & const difference ===
// // when you declare let value then reassign again, but you declare const value then you don't reassign again.
// // i comment the code of const, you un-comment this & check, you got an error.

// let interestRate = 0.3;
// interestRate = 1;
// console.log(interestRate);

// // const highRate = 0.3;
// // highRate = 1;
// // console.log(interestRate);

// // === Primitive / Value Types ===

// let city = 'Karachi'; //String Literal
// let age = 24; //Number Literal
// let isApproved = true; //Boolean Literal
// let area = undefined; //undefined
// let selectedColor = null; //null

// // === Reference Type ===

// //Object
// //Array
// //Function