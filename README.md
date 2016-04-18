# Keep fixed between
This is a simple, lightweight, dependency free library that helps you create position sticky like effect.
It works in any browser (even IE) and does not need to be wrapped in a div.

### Pros
* Dependency free
* Easy to use
* Easy to customize

### Examples
[First](http://to.do)

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