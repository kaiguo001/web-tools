(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.webTools = {}));
})(this, (function (exports) { 'use strict';

    function throttle(fn, delay) {
        let lastExecutionTime = 0;
        return function(...args) {
          const currentTime = Date.now();
          if (currentTime - lastExecutionTime >= delay) {
            fn(...args);
            lastExecutionTime = currentTime;
          }
        };
    }

    // 防抖
    function debounce(fn, delay) {
        let timer;
        return function (...args) {
            clearTimeout(timer);
            timer = setTimeout(() => {
            fn(...args);
            }, delay);
        }
    }

    exports.debounce = debounce;
    exports.throttle = throttle;

}));
