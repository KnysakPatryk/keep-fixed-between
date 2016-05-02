/**
 * Keeps element with position fixed only between two divs.
 *
 * @param {Object} options
 */
window.keepFixedBetween = (function (options) {

    "use strict";

    var fixedElement = document.querySelector(options.fixedElement),
        topElement = document.querySelector(options.topElement),
        bottomElement = document.querySelector(options.bottomElement),
        topMargin = (options.topMargin !== undefined) ? options.topMargin : 0,
        bottomMargin = (options.bottomMargin !== undefined) ? options.bottomMargin : 0,
        fixedElementBox, topElementBox, bottomElementBox;

    function init() {
        moveElement();

        window.addEventListener('resize', moveElement);
        window.addEventListener('scroll', moveElement);
    }

    function moveElement() {
        fixedElement.style.bottom = null;

        fixedElementBox = fixedElement.getBoundingClientRect();
        topElementBox = topElement.getBoundingClientRect();
        bottomElementBox = bottomElement.getBoundingClientRect();

        keepAwayFromTop();
        keepAwayFromBottom();
    }

    function keepAwayFromTop() {
        if (fixedElementBox.top <= topElementBox.bottom) {
            fixedElement.style.bottom = (window.innerHeight - topElementBox.bottom - fixedElementBox.height - topMargin) + "px";
        }
    }

    function keepAwayFromBottom() {
        if (fixedElementBox.bottom >= bottomElementBox.top) {
            fixedElement.style.bottom = (window.innerHeight - bottomElementBox.top + bottomMargin) + "px";
        }
    }

    init();

});
