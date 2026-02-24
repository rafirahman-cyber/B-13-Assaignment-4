1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
ANS: getElementById() = is method to selects one element by id.
     getElementsByClassName() = is method to selects multiple elements by class.
     querySelector() = is method to selects the first matching element using a CSS selector.

2. How do you create and insert a new element into the DOM?
ANS: Using document.createElement() to create an element and appendChild() to insert it into the DOM.

3.  What is Event Bubbling? And how does it work?
ANS: Event Bubbling is when an event starts from the target element and then moves upward to its parent elements.
     It works by triggering the event.

4. What is Event Delegation in JavaScript? Why is it useful?
ANS: Event Delegation is a technique where you add one event listener to a parent element instead of adding 
     listeners to multiple child elements.

5. What is the difference between preventDefault() and stopPropagation() methods?
ANS: preventDefault() = is method where it stops the browser’s default action
     stopPropagation() → is method where it stops the event from bubbling up to parent elements.