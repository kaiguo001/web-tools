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
export default debounce