# Keep fixed between
This is a simple, lightweight, dependency free library that helps you create position sticky like effect.
It works in any browser (even IE) and does not need to be wrapped in a div.

### Pros
* Dependency free
* Easy to use
* Easy to customize

### Examples
[First](http://superserwer.usermd.net/github/keep-fixed-between/examples/first.html)

### Installation
With NPM

    npm install keep-fixed-between
With Bower

    bower install keep-fixed-between
    
### How to use it?
It's really simple

    window.onload = function () {
        keepFixedBetween({
            fixedElement: "#fixed", 
            topElement: "#topElement",
            bottomElement: "#bottomElement"
        });
    };
	
### Parameters
* fixedElement *(required)* - element to move, with fixed position
* topElement *(required)* - top element, fixed element will not go over it
* bottomElement *(required)* - bottom element, fixed element will not go under it
* topMargin *(optional)* - margin in pixels between top element and fixed element
* bottomMargin *(optional)* - margin in pixels between bottom element and fixed element
	
### To do
- [x] Get rid of removeAttribute('style') usage - v1.0.3
- [x] Adjustable margin for fixed element - v1.0.4
- [ ] Unit tests